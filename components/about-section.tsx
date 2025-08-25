"use client"

import { Badge } from "@/components/ui/badge"

interface AboutSectionProps {
  language: "en" | "ar"
}

export function AboutSection({ language }: AboutSectionProps) {
  const isArabic = language === "ar"

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto">
        <div className={`max-w-3xl mx-auto ${isArabic ? "text-right" : "text-left"}`}>
          <p className={`text-sm sm:text-base text-muted-foreground mb-6 ${isArabic ? "font-arabic" : "font-sans"}`}>
            {isArabic
              ? "في عالم رقمي سريع التطور، يحتاج كل مؤسس ومستقل إلى حضور قوي عبر الإنترنت للنجاح."
              : "In today's fast-evolving digital world, every founder and freelancer needs a strong online presence to succeed."}
          </p>

          <div className={`flex ${isArabic ? "justify-start" : "justify-start"} mb-5`}>
            <Badge
              variant="outline"
              className="text-xs px-2.5 py-1 bg-transparent border border-border/50 transition-all duration-300 hover:border-border cursor-default flex items-center gap-2 w-fit rounded-xl"
            >
              <div className="w-1.5 h-1.5 bg-[#5654D4] rounded-full animate-pulse"></div>
              {isArabic ? "لكن، هناك مشكلة" : "BUT, THERE'S A PROBLEM"}
            </Badge>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight ${isArabic ? "font-arabic" : "font-sans"}`}
          >
            {isArabic
              ? "معظم الشركات الناشئة والمستقلين يعتمدون على مواقع قديمة وقوالب مملة، مما يفقدهم الفرص."
              : "Most startups and freelancers rely on outdated websites and boring templates, missing out on opportunities."}
          </h2>

          <div
            className={`space-y-5 text-sm sm:text-base text-muted-foreground ${isArabic ? "font-arabic" : "font-sans"}`}
          >
            <p>
              {isArabic
                ? "في فاوندرز لاب، نبني مواقع ومنتجات حديثة وسريعة تساعدك على التميز، جذب العملاء، وتنمية أعمالك - بدون الحاجة لاشتراكات مكلفة أو قوالب مستعملة."
                : "At Founders Lab, we build fast and modern websites and products that help you stand out, attract customers, and grow your business - without expensive subscriptions or used templates."}
            </p>
          </div>

          <div className={`mt-10 p-5 bg-muted/30 rounded-2xl ${isArabic ? "text-right" : "text-left"}`}>
            <p className={`text-sm text-muted-foreground mb-3 ${isArabic ? "font-arabic" : "font-sans"}`}>
              {isArabic ? "نحن متخصصون في خدمة" : "We specialize in serving"}{" "}
              <span className="font-semibold text-foreground">
                {isArabic ? "المؤسسين، الشركات الناشئة، الأعمال" : "founders, startups, businesses"}
              </span>{" "}
              {isArabic ? "و" : "and"}{" "}
              <span className="font-semibold text-foreground">{isArabic ? "المستقلين" : "freelancers"}</span>.{" "}
              {isArabic ? "نستخدم أحدث التقنيات مثل" : "We use cutting-edge technologies like"}{" "}
              <span className="font-semibold text-foreground">Next.js, React, TypeScript</span> {isArabic ? "و" : "and"}{" "}
              <span className="font-semibold text-foreground">{isArabic ? "المزيد" : "more"}</span>.{" "}
              {isArabic
                ? "هدفنا هو مساعدتك في الحصول على موقع يعكس احترافيتك ويحقق أهدافك."
                : "Our goal is to help you get a website that reflects your professionalism and achieves your goals."}
            </p>

            
          </div>

          {/* === How We Work (drop-in replacement) === */}
<div className={`mt-16 ${isArabic ? "text-right" : "text-left"}`}>
  <h3
    className={`text-xl sm:text-2xl font-bold text-foreground mb-8 ${isArabic ? "font-arabic" : "font-sans"}`}
  >
    {isArabic ? "كيف نعمل" : "How We Work"}
  </h3>

  <div className="relative">
    {/* connector line */}
    

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Step 1 */}
      <div className="group relative">
        {/* step badge */}
        <div className={`w-fit ${isArabic ? "ml-auto" : ""} mb-3`}>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-background/70 backdrop-blur text-xs font-bold">
            01
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
          <div
            className={`text-[11px] tracking-wide uppercase text-muted-foreground mb-2 ${isArabic ? "font-arabic" : "font-sans"}`}
          >
            {isArabic ? "الخطوة الأولى" : "Step One"}
          </div>
          <h4 className={`text-base font-semibold text-foreground mb-2 ${isArabic ? "font-arabic" : "font-sans"}`}>
            {isArabic ? "فهم احتياجاتك" : "Understand Your Needs"}
          </h4>
          <p className={`text-sm text-muted-foreground leading-relaxed ${isArabic ? "font-arabic" : "font-sans"}`}>
            {isArabic
              ? "نستمع لأهدافك ونحلل متطلبات مشروعك بعناية لتحديد النطاق والنتائج المتوقعة."
              : "We listen to your goals and analyze requirements to define scope and outcomes clearly."}
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="group relative">
        {/* step badge */}
        <div className={`w-fit ${isArabic ? "ml-auto" : ""} mb-3`}>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-background/70 backdrop-blur text-xs font-bold">
            02
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
          <div
            className={`text-[11px] tracking-wide uppercase text-muted-foreground mb-2 ${isArabic ? "font-arabic" : "font-sans"}`}
          >
            {isArabic ? "الخطوة الثانية" : "Step Two"}
          </div>
          <h4 className={`text-base font-semibold text-foreground mb-2 ${isArabic ? "font-arabic" : "font-sans"}`}>
            {isArabic ? "خطة وتنفيذ مرن" : "Plan & Agile Execution"}
          </h4>
          <p className={`text-sm text-muted-foreground leading-relaxed ${isArabic ? "font-arabic" : "font-sans"}`}>
            {isArabic
              ? "نضع خطة واضحة بمراحل قصيرة وتجارب سريعة ونماذج أولية قابلة للمراجعة."
              : "We draft a clear plan with short sprints, rapid experiments, and reviewable prototypes."}
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="group relative">
        {/* step badge */}
        <div className={`w-fit ${isArabic ? "ml-auto" : ""} mb-3`}>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-background/70 backdrop-blur text-xs font-bold">
            03
          </span>
        </div>

        <div className="p-5 rounded-2xl border border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
          <div
            className={`text-[11px] tracking-wide uppercase text-muted-foreground mb-2 ${isArabic ? "font-arabic" : "font-sans"}`}
          >
            {isArabic ? "الخطوة الثالثة" : "Step Three"}
          </div>
          <h4 className={`text-base font-semibold text-foreground mb-2 ${isArabic ? "font-arabic" : "font-sans"}`}>
            {isArabic ? "التسليم والتحسين" : "Deliver & Improve"}
          </h4>
          <p className={`text-sm text-muted-foreground leading-relaxed ${isArabic ? "font-arabic" : "font-sans"}`}>
            {isArabic
              ? "نسلّم بسرعة مع مراقبة الأداء وتحسينات مستمرة بناءً على البيانات."
              : "We ship fast, monitor performance, and iterate continuously based on data."}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
