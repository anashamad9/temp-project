"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ProjectsPage() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Check URL params first, then localStorage
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get("lang")

    if (langParam && (langParam === "en" || langParam === "ar")) {
      setLanguage(langParam)
      localStorage.setItem("language", langParam)
    } else {
      const savedLanguage = localStorage.getItem("language")
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      clientLogo: "/client-logos/onqoud-logo.png",
      clientName: "Onqoud AI",
      type: language === "ar" ? "منصة ذكاء اصطناعي" : "AI Platform",
      features:
        language === "ar" ? ["تحليل البيانات", "لوحة تحكم", "تقارير"] : ["Data Analytics", "Dashboard", "Reports"],
      images: ["/projects/onqoud-landing.png", "/projects/onqoud-dashboard.png"],
      description:
        language === "ar"
          ? "منصة ذكاء اصطناعي متطورة لتحليل البيانات التجارية وتوليد التقارير الذكية. تم تطوير المنصة باستخدام أحدث التقنيات لتوفير تجربة مستخدم استثنائية."
          : "Advanced AI platform for business data analysis and intelligent report generation. Built with cutting-edge technology to provide exceptional user experience.",
    },
    {
      id: 2,
      clientLogo: "/client-logos/elmllm-logo.png",
      clientName: "ElmLLM",
      type: language === "ar" ? "نموذج لغوي" : "Language Model",
      features:
        language === "ar" ? ["معالجة اللغة", "ذكاء اصطناعي", "محادثة"] : ["NLP", "AI Chat", "Language Processing"],
      images: ["/projects/elmllm-landing.png", "/projects/elmllm-chatbot.png"],
      description:
        language === "ar"
          ? "نموذج لغوي عربي متقدم يوفر إمكانيات معالجة اللغة الطبيعية والمحادثة الذكية. مصمم خصيصاً للمحتوى العربي مع دعم كامل للسياق الثقافي."
          : "Advanced Arabic language model providing natural language processing and intelligent conversation capabilities. Specifically designed for Arabic content with full cultural context support.",
    },
    {
      id: 3,
      clientLogo: "/client-logos/aa-logo.png",
      clientName: "ML Engineer Portfolio",
      type: language === "ar" ? "موقع شخصي" : "Personal Website",
      features: language === "ar" ? ["معرض أعمال", "سيرة ذاتية", "مشاريع"] : ["Portfolio", "Resume", "Projects"],
      images: ["/projects/ml-engineer-portfolio.png", "/projects/ml-engineer-portfolio-light.png"],
      description:
        language === "ar"
          ? "موقع شخصي احترافي لمهندس تعلم آلة يعرض خبراته ومشاريعه التقنية. يتميز بتصميم عصري وواجهة مستخدم بديهية مع دعم كامل للغة العربية."
          : "Professional personal website for a machine learning engineer showcasing technical expertise and projects. Features modern design and intuitive user interface with full Arabic language support.",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  return (
    <div
      className={`min-h-screen bg-background ${language === "ar" ? "rtl font-arabic" : "ltr font-sans"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Navbar language={language} onLanguageChange={setLanguage} />

      <main className="pt-8">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16 py-12">
          {/* Header */}
          <div className={`text-center mb-12 ${language === "ar" ? "font-arabic" : "font-sans"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {language === "ar" ? "مشاريعنا" : "Our Projects"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "ar"
                ? "استكشف مجموعة من أفضل أعمالنا وحلولنا المبتكرة للعملاء"
                : "Explore our finest work and innovative solutions for clients"}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-border/40 rounded-xl overflow-hidden bg-background leading-7"
              >
                <div className="grid lg:grid-cols-12 min-h-[400px]">
                  {/* Left Section - Client Info */}
                  <div
                    className={`lg:col-span-3 p-6 border-r border-border/40 ${language === "ar" ? "text-right" : "text-left"}`}
                  >
                    <div className="space-y-4">
                      <div className={`flex items-center gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 flex items-center justify-center">
                          <Image
                            src={project.clientLogo || "/placeholder.svg"}
                            alt={project.clientName}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{project.clientName}</h3>
                          <p className="text-sm text-muted-foreground">{project.type}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">
                          {language === "ar" ? "المميزات" : "Features"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Section - Images */}
                  <div className="lg:col-span-6 relative bg-muted">
                    <div className="relative h-full min-h-[400px]">
                      <Image
                        src={project.images[currentImageIndex[project.id] || 0]}
                        alt={`${project.clientName} project`}
                        fill
                        className="object-cover"
                      />

                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={() =>
                              language === "ar"
                                ? nextImage(project.id, project.images.length)
                                : prevImage(project.id, project.images.length)
                            }
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() =>
                              language === "ar"
                                ? prevImage(project.id, project.images.length)
                                : nextImage(project.id, project.images.length)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          {/* Image Indicators */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [project.id]: index }))}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  (currentImageIndex[project.id] || 0) === index ? "bg-primary" : "bg-background/60"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right Section - Description */}
                  <div className={`lg:col-span-3 p-6 ${language === "ar" ? "text-right" : "text-left"}`}>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">
                        {language === "ar" ? "وصف المشروع" : "Project Description"}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  )
}
