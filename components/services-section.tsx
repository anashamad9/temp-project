"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Box, CheckCircle2, Shield, Sparkles, ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ServicesSectionProps {
  language: "en" | "ar"
}

const services = [
  {
    id: "solo",
    title: { en: "Solo & Freelancers", ar: "المستقلين والأفراد" },
    description: {
      en: "Perfect solutions for individual entrepreneurs and freelancers looking to establish their digital presence with professional websites and branding.",
      ar: "حلول مثالية لرواد الأعمال الأفراد والمستقلين الذين يسعون لإنشاء حضور رقمي مع مواقع ويب وهوية بصرية احترافية.",
    },
    features: {
      en: ["Personal websites", "Portfolio", "Personal Blog", "Forms"],
      ar: ["المواقع الشخصية", "المحفظة", "المدونة الشخصية", "النماذج"],
    },
  },
  {
    id: "startups",
    title: { en: "Startups & Tech Products", ar: "الشركات الناشئة والمنتجات التقنية" },
    description: {
      en: "Comprehensive digital solutions for startups and tech companies, from MVP development to full-scale product launches with modern tech stacks.",
      ar: "حلول رقمية شاملة للشركات الناشئة والتقنية، من تطوير المنتج الأولي إلى إطلاق المنتجات الكاملة بأحدث التقنيات.",
    },
    features: {
      en: ["MVP Development", "Full Product Development", "Websites", "Scalable Architecture"],
      ar: ["تطوير المنتج الأولي", "تطوير المنتج الكامل", "المواقع", "البنية القابلة للتوسع"],
    },
  },
  {
    id: "websites",
    title: { en: "Landing Pages & Websites", ar: "الصفحات المقصودة والمواقع" },
    description: {
      en: "High-converting landing pages and business websites designed to drive results, increase conversions, and establish strong online presence.",
      ar: "صفات مقصودة عالية التحويل ومواقع أعمال مصممة لتحقيق النتائج وزيادة التحويلات وإنشاء حضور قوي على الإنترنت.",
    },
    features: {
      en: ["Marketing website", "Landing page", "Ecommerce", "Anything"],
      ar: ["موقع التسويق", "الصفحة المقصودة", "التجارة الإلكترونية", "أي شيء"],
    },
  },
]

export function ServicesSection({ language }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState("solo")
  const currentService = services.find((service) => service.id === activeService)
  const isAR = language === "ar"

  return (
    <section id="services-section" className="py-12 sm:py-16 lg:py-20" dir={isAR ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-36">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border/50 bg-transparent text-xs font-medium mb-3 hover:border-border transition-colors duration-300">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {isAR ? "خدماتنا الرئيسية" : "Our Main Services"}
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 ${isAR ? "font-arabic" : "font-sans"}`}>
            {isAR ? "خدمات مصممة خصيصاً لنجاحك" : "Services Tailored for Your Success"}
          </h2>
          <p className={`text-sm sm:text-base text-muted-foreground max-w-xl mx-auto ${isAR ? "font-arabic" : "font-sans"}`}>
            {isAR
              ? "نقدم حلولاً متخصصة لأنواع مختلفة من العملاء، مما يضمن حصول كل منهم على ما يحتاجه بالضبط للنجاح."
              : "We provide specialized solutions for different types of clients, ensuring each gets exactly what they need to succeed."}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 mb-10">
          {services.map((service) => (
            <Button
              key={service.id}
              variant={activeService === service.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveService(service.id)}
              className={`px-3 py-1.5 text-xs w-full sm:w-auto transition-all duration-300 ${
                isAR ? "font-arabic" : "font-sans"
              }`}
            >
              {service.title[language]}
            </Button>
          ))}
        </div>

        {/* Content */}
        {currentService && (
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center ${isAR ? "lg:grid-flow-col-dense" : ""}`}>
            {/* Left: Visual */}
            <div className={`order-1 lg:order-none ${isAR ? "lg:col-start-2" : ""}`}>
              <div className="aspect-[4/3] rounded-xl border border-border/50 overflow-hidden relative bg-gradient-to-tr from-muted/70 via-muted to-background">
                {/* subtle overlay */}
                <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(transparent,black_65%)] bg-[url('/noise.png')] opacity-30" />
                {activeService === "solo" && (
                  <img
                    src="/projects/Group 17.png"
                    alt="ML Engineer Portfolio"
                    className="w-full h-full object-cover"
                  />
                )}
                {activeService === "startups" && (
                  <img
                    src="/projects/job-board-platform.png"
                    alt="Job Board Platform"
                    className="w-full h-full object-cover"
                  />
                )}
                {activeService === "websites" && (
                  <img
                    src="/projects/adaptio-automation.png"
                    alt="Adaptio Landing Page"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* Right: Redesigned Details Panel */}
            <div className={`order-2 lg:order-none ${isAR ? "lg:col-start-1 text-right" : "text-left"}`}>
              <div className="relative rounded-2xl border border-border/50 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 p-5 sm:p-6">
                
                {/* Title row */}
                <div className={`flex items-center ${isAR ? "flex-row-reverse" : ""} justify-between gap-3 mb-3`}>
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 ${isAR ? "font-arabic" : "font-sans"}`}
                  >
                    {currentService.title[language]}
                  </h3>

                  {/* Trust chips */}
                  <div className={`flex items-center gap-2 ${isAR ? "flex-row-reverse" : ""}`}>
                    <span className="text-[10px] px-2 py-1 rounded-full border border-border/50">
                      <span className="inline-flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        {isAR ? "موثوق" : "Trusted"}
                      </span>
                    </span>
                    <span className="text-[10px] px-2 py-1 rounded-full border border-border/50">
                      <span className="inline-flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        {isAR ? "تصميم حديث" : "Modern Design"}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm text-muted-foreground leading-relaxed mb-5 ${isAR ? "font-arabic" : "font-sans"}`}>
                  {currentService.description[language]}
                </p>

                {/* Mini value stats */}
                <div className={`grid grid-cols-3 gap-2 mb-5 ${isAR ? "text-right" : "text-left"}`}>
                  <div className="rounded-lg border border-border/40 p-2">
                    <div className="text-xs text-muted-foreground">{isAR ? "وقت الإطلاق" : "Launch Time"}</div>
                    <div className="text-sm font-semibold">{isAR ? "سريع" : "Fast"}</div>
                  </div>
                  <div className="rounded-lg border border-border/40 p-2">
                    <div className="text-xs text-muted-foreground">{isAR ? "قابلية التوسع" : "Scalability"}</div>
                    <div className="text-sm font-semibold">{isAR ? "عالية" : "High"}</div>
                  </div>
                  <div className="rounded-lg border border-border/40 p-2">
                    <div className="text-xs text-muted-foreground">{isAR ? "الدعم" : "Support"}</div>
                    <div className="text-sm font-semibold">{isAR ? "مستمر" : "Ongoing"}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4
                    className={`font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-2 ${isAR ? "font-arabic" : "font-sans"}`}
                  >
                    {isAR ? "الحلول" : "Solutions"}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {currentService.features[language].map((feature, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 rounded-full border border-border/50 px-2.5 py-1 text-xs ${
                          isAR ? "flex-row-reverse" : ""
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span className={isAR ? "font-arabic" : "font-sans"}>{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div
                  className={`flex ${isAR ? "flex-row-reverse" : ""} items-center justify-between gap-3 rounded-xl border border-border/40 bg-muted/30 p-3`}
                >
                  <div className="text-xs text-muted-foreground">
                    {isAR ? "جاهز للبدء؟ لنحوّل فكرتك إلى منتج فعّال." : "Ready to start? Let’s turn your idea into a working product."}
                  </div>
                  <Link href="/contact">
                    <Button
                      size="sm"
                      className={`px-4 py-2 text-sm ${isAR ? "font-arabic" : "font-sans"}`}
                    >
                      {/* Icon first, margin respects direction */}
                      <Box className={`w-4 h-4 ${isAR ? "ml-2" : "mr-2"}`} />
                      {isAR ? "ابني معنا" : "Build with us"}
                      <ArrowUpRight className={`w-4 h-4 ${isAR ? "mr-2" : "ml-2"}`} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className={`text-center mb-6 ${isAR ? "font-arabic" : "font-sans"}`}>
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">
              {isAR ? "مجموعة التقنيات الأساسية لدينا" : "OUR CORE TECH STACK"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
              <img src="/tech-logos/nextjs.png" alt="Next.js" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
              <img src="/tech-logos/typescript.png" alt="TypeScript" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
              <img src="/tech-logos/javascript.png" alt="JavaScript" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
              <img src="/tech-logos/fastapi.png" alt="FastAPI" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
              <img src="/tech-logos/vercel.png" alt="Vercel" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
              <img src="/tech-logos/mongodb.png" alt="MongoDB" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
              <img src="/tech-logos/github.png" alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity duration-200">
              <img src="/tech-logos/figma.png" alt="Figma" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
