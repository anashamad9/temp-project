"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TestimonialsProps {
  language: "en" | "ar"
}

const testimonials = [
  {
    id: 1,
    quote: {
      en: "Founders Lab transformed our startup's digital presence completely. Their team delivered a modern, fast-loading website that perfectly captures our brand identity and has significantly improved our conversion rates.",
      ar: "حولت فاوندرز لاب الحضور الرقمي لشركتنا الناشئة بالكامل. فريقهم قدم موقعًا حديثًا وسريع التحميل يعكس هوية علامتنا التجارية بشكل مثالي وحسن معدلات التحويل بشكل كبير.",
    },
    author: {
      en: "Mohammad Doleh",
      ar: "محمد دوله",
    },
    position: {
      en: "CTO, Onqoud",
      ar: "مدير التكنولوجيا، أونقود",
    },
    image: "/founders/founder-1.png",
    projectImage: "/projects/Group 29.png",
  },
  {
    id: 2,
    quote: {
      en: "Working with Founders Lab was an exceptional experience. They understood our vision and delivered a product that exceeded our expectations. The attention to detail and technical expertise is outstanding.",
      ar: "العمل مع فاوندرز لاب كان تجربة استثنائية. فهموا رؤيتنا وقدموا منتجًا فاق توقعاتنا. الاهتمام بالتفاصيل والخبرة التقنية متميزة.",
    },
    author: {
      en: "Lana Haymoor",
      ar: "لانا حيمور",
    },
    position: {
      en: "AlKamalyeh",
      ar: "الكماليه",
    },
    image: "/founders/founder-3.png",
    projectImage: "/projects/financial-dashboard.png",
  },
  {
    id: 3,
    quote: {
      en: "The team at Founders Lab delivered our e-commerce platform ahead of schedule with incredible quality. Their modern approach and clean code made all the difference for our business growth.",
      ar: "فريق فاوندرز لاب سلم منصة التجارة الإلكترونية الخاصة بنا قبل الموعد المحدد بجودة لا تصدق. نهجهم الحديث والكود النظيف أحدث فرقًا كبيرًا في نمو أعمالنا.",
    },
    author: {
      en: "Mahmoud Asaad",
      ar: "محمود أسعد",
    },
    position: {
      en: "Techstart",
      ar: "تك ستارت",
    },
    image: "/founders/founder-2.png",
    projectImage: "/projects/adaptio-automation.png",
  },
]

export function TestimonialsSection({ language }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 sm:py-20" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className={`text-center mb-12 ${language === "ar" ? "font-arabic" : "font-sans"}`}>
          <p className="text-xs sm:text-sm text-muted-foreground/60 uppercase tracking-wider mb-3">
            {language === "ar" ? "ماذا يقولون" : "WHAT THEY SAY"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            {language === "ar" ? "شهادات عملائنا" : "Our testimonials"}
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${language === "ar" ? "lg:grid-cols-2" : ""}`}
          >
            {/* Quote Section */}
            <div className={`${language === "ar" ? "lg:order-2 text-right" : "lg:order-1 text-left"}`}>
              <div className="mb-6">
                <blockquote
                  className={`text-base sm:text-lg leading-relaxed mb-6 ${language === "ar" ? "font-arabic" : "font-sans"}`}
                >
                  "{currentTestimonial.quote[language]}"
                </blockquote>

                <div className={`flex items-center gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.author[language]}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className={`${language === "ar" ? "text-right font-arabic" : "text-left font-sans"}`}>
                    <p className="font-medium text-sm">{currentTestimonial.author[language]}</p>
                    <p className="text-xs text-muted-foreground">{currentTestimonial.position[language]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Visual Section */}
            <div className={`${language === "ar" ? "lg:order-1" : "lg:order-2"}`}>
              <div className="bg-muted/30 rounded-lg aspect-[4/3] overflow-hidden border">
                <img
                  src={currentTestimonial.projectImage || "/placeholder.svg"}
                  alt={`${currentTestimonial.author[language]} project`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full p-0 bg-transparent"
            >
              {language === "ar" ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-foreground" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full p-0 bg-transparent"
            >
              {language === "ar" ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
