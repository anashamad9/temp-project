"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "ar">("en")

  return (
    <div className="min-h-screen flex flex-col" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="flex-1">
        <HeroSection language={language} />
        <PortfolioShowcase language={language} />
        <ServicesSection language={language} />
        <AboutSection language={language} />
        <TestimonialsSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}
