"use client";

import { useEffect, useRef, useState } from "react";

interface PortfolioShowcaseProps {
  language: "en" | "ar";
}

const portfolioItems = [
  { id: 1, title: { en: "Onqoud AI Platform", ar: "منصة عنقود للذكاء الاصطناعي" }, category: { en: "Business Intelligence, Product", ar: "ذكاء الأعمال، المنتج" }, image: "/projects/onqoud-dashboard.png" },
  { id: 2, title: { en: "ML Engineer Portfolio", ar: "محفظة مهندس التعلم الآلي" }, category: { en: "Personal Website, Solo Freelancer", ar: "موقع شخصي، مستقل فردي" }, image: "/projects/Group 23.png" },
  { id: 3, title: { en: "Financial Dashboard", ar: "لوحة تحكم مالية" }, category: { en: "FinTech, Analytics", ar: "التكنولوجيا المالية، التحليلات" }, image: "/projects/financial-dashboard.png" },
  { id: 4, title: { en: "ElmLLM Chatbot", ar: "روبوت المحادثة علم" }, category: { en: "Arabic LLM Chatbot, MVP", ar: "روبوت محادثة عربي، نموذج أولي" }, image: "/projects/elmllm-chatbot.png" },
  { id: 5, title: { en: "Adaptio Automation", ar: "أتمتة أدابتيو" }, category: { en: "AI, Workflow", ar: "الذكاء الاصطناعي، سير العمل" }, image: "/projects/adaptio-automation.png" },
  { id: 6, title: { en: "Onqoud AI Landing", ar: "صفحة هبوط عنقود للذكاء الاصطناعي" }, category: { en: "Business Intelligence, Landing Page", ar: "ذكاء الأعمال، صفحة هبوط" }, image: "/projects/onqoud-landing.png" },
  { id: 7, title: { en: "ElmLLM Platform", ar: "منصة علم" }, category: { en: "Arabic LLM Chatbot, Landing Page", ar: "واجهة نموذج لغوي ضخم و محادثة عربي، صفحة هبوط" }, image: "/projects/elmllm-landing.png" },
  { id: 8, title: { en: "ThakaaLab", ar: "ذكاء لاب" }, category: { en: "SaaS, Tech Startups", ar: "البرمجيات كخدمة، الشركات الناشئة التقنية" }, image: "/projects/Group 30.png" },
];

export function PortfolioShowcase({ language }: PortfolioShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const DUPLICATES = 3; // triple for seamless coverage
    let pos = 0;
    let frameId = 0;
    let segmentWidth = 0;
    const normalSpeed = 0.8;
    const slowSpeed = 0.2;

    const recalc = () => {
      segmentWidth = track.scrollWidth / DUPLICATES;
      pos = ((pos % segmentWidth) + segmentWidth) % segmentWidth;
      track.style.transform = `translateX(${-pos}px)`;
    };

    // initial measure
    recalc();

    // Observe size changes (images loading, responsive)
    let ro: ResizeObserver | null = null;
    const hasRO = typeof ResizeObserver !== "undefined";

    if (hasRO) {
      ro = new ResizeObserver(recalc);
      ro.observe(track);
      ro.observe(container);
    } else {
      // Fallback for environments without RO
      const t = setTimeout(recalc, 400);
      if (typeof globalThis !== "undefined" && typeof globalThis.addEventListener === "function") {
        globalThis.addEventListener("load", recalc as EventListener, { once: true });
      }
      // Cleanup for the fallback timeout+listener
      // (we’ll also clean the animation + resize below)
      const cleanupFallback = () => {
        clearTimeout(t);
        if (typeof globalThis !== "undefined" && typeof globalThis.removeEventListener === "function") {
          globalThis.removeEventListener("load", recalc as EventListener);
        }
      };
      // Attach to return cleanup via a flag
      (recalc as any)._cleanupFallback = cleanupFallback;
    }

    const animate = () => {
      const speed = isHoveredRef.current ? slowSpeed : normalSpeed;
      pos += speed;
      if (pos >= segmentWidth) pos -= segmentWidth;
      track.style.transform = `translateX(${-pos}px)`;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    const onResize = () => recalc();
    if (typeof globalThis !== "undefined" && typeof globalThis.addEventListener === "function") {
      globalThis.addEventListener("resize", onResize as EventListener);
    }

    return () => {
      cancelAnimationFrame(frameId);
      if (typeof globalThis !== "undefined" && typeof globalThis.removeEventListener === "function") {
        globalThis.removeEventListener("resize", onResize as EventListener);
      }
      if (ro) ro.disconnect();
      if ((recalc as any)._cleanupFallback) (recalc as any)._cleanupFallback();
    };
  }, [language]); // re-init widths when text changes between EN/AR

  return (
    <section className="py-16 bg-muted/30 w-full" dir={language === "ar" ? "rtl" : "ltr"}>
      <div
        ref={containerRef}
        className="overflow-hidden px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Keep the moving track LTR so order stays stable in Arabic */}
        <div ref={trackRef} dir="ltr" className="flex gap-8 will-change-transform" style={{ transform: "translateX(0px)" }}>
          {/* Triple-duplicate for seamless loop */}
          {[...portfolioItems, ...portfolioItems, ...portfolioItems].map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex-shrink-0 group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-background border">
                <div className="aspect-[3/2] w-96">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className={`mt-3 px-1 ${language === "ar" ? "text-right font-arabic" : "text-left font-sans"}`}>
                <h3 className="font-medium text-sm mb-1">{item.title[language]}</h3>
                <p className="text-xs text-muted-foreground">{item.category[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
