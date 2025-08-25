"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import {Instagram, Facebook } from "lucide-react";

interface FooterProps {
  language: "en" | "ar"
}

export function Footer({ language }: FooterProps) {
  const { theme } = useTheme()

  const content = {
    en: {
      company: "Founders Lab",
      tagline: "Building modern websites for the next generation of entrepreneurs",
      services: "Services",
      servicesList: ["Solo & Freelancers", "Startups & Tech Products", "Landing Pages & Websites"],
      company_section: "Company",
      companyList: ["Make Money", "Projects", "Services", "Contact"],
      contact: "Contact",
      email: "hello@founderslab.com",
      phone: "+962795874662",
      address: "Amman, Jordan",
      followUs: "Follow Us",
      copyright: "© 2024 Founders Lab. All rights reserved.",
      builtWith: "Built with modern web technologies",
    },
    ar: {
      company: "فاوندرز لاب",
      tagline: "بناء مواقع ويب حديثة للجيل القادم من رواد الأعمال",
      services: "الخدمات",
      servicesList: ["الأفراد والمستقلين", "الشركات الناشئة والمنتجات التقنية", "الصفحات المقصودة والمواقع"],
      company_section: "الشركة",
      companyList: ["اربح المال", "المشاريع", "الخدمات", "تواصل"],
      contact: "التواصل",
      email: "hello@founderslab.com",
      phone: "+962795874662",
      address: "عمان، الأردن",
      followUs: "تابعنا",
      copyright: "© 2024 فاوندرز لاب. جميع الحقوق محفوظة.",
      builtWith: "مبني بتقنيات الويب الحديثة",
    },
  }

  const currentContent = content[language]

  return (
    <footer className="py-8 px-8 sm:px-12 lg:px-16" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="bg-black text-white rounded-2xl border p-8 sm:p-10 lg:p-12 border-stone-800">
        <div className={`${language === "ar" ? "font-arabic rtl" : "font-english ltr"}`}>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className={`space-y-4 ${language === "ar" ? "text-right" : "text-left"}`}>
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Image
                    src="/FoundersLab copy.png"
                    alt={currentContent.company}
                    width={120}
                    height={40}
                    className="h-8 w-auto cursor-pointer"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xs">{currentContent.tagline}</p>
            </div>

            {/* Services */}

            {/* Company */}
            <div className={`space-y-4 ${language === "ar" ? "text-right" : "text-left"}`}>
              <h3 className="font-semibold text-sm text-white">{currentContent.company_section}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/make-money" className="text-sm text-gray-300 hover:text-white transition-colors">
                    {currentContent.companyList[0]}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-gray-300 hover:text-white transition-colors">
                    {currentContent.companyList[1]}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    {currentContent.companyList[2]}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                    {currentContent.companyList[3]}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className={`space-y-4 ${language === "ar" ? "text-right" : "text-left"}`}>
              <h3 className="font-semibold text-sm text-white">{currentContent.contact}</h3>
              <div className="space-y-3">
                <div className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <Mail className="h-4 w-4 text-gray-300" />
                  <a
                    href={`mailto:${currentContent.email}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {currentContent.email}
                  </a>
                </div>
                <div className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <Phone className="h-4 w-4 text-gray-300" />
                  <a
                    href={`tel:${currentContent.phone}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {currentContent.phone}
                  </a>
                </div>
                <div className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <MapPin className="h-4 w-4 text-gray-300" />
                  <span className="text-sm text-gray-300">{currentContent.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Bottom Section */}
          <div
            className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-zinc-600 ${language === "ar" ? "md:flex-row-reverse" : ""}`}
          >
            {/* Social Links */}
<div className={`flex items-center gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}>
  <span className="text-sm text-gray-300" dir={language === "ar" ? "rtl" : "ltr"}>
    {currentContent.followUs}:
  </span>
  <div className="flex items-center gap-3">
    <a
      href="https://x.com/LabFounders"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
      aria-label="X (Twitter)"
      title="X (Twitter)"
    >
      <Twitter className="h-4 w-4" />
    </a>

    <a
      href="https://www.linkedin.com/company/founderslabdev/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <Linkedin className="h-4 w-4" />
    </a>

    <a
      href="https://www.instagram.com/founderslab.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
      aria-label="Instagram"
      title="Instagram"
    >
      <Instagram className="h-4 w-4" />
    </a>

    <a
      href="https://web.facebook.com/people/Founders-Lab/61579645203785/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
      aria-label="Facebook"
      title="Facebook"
    >
      <Facebook className="h-4 w-4" />
    </a>
  </div>
</div>

            {/* Copyright & Built With */}
            <div
              className={`flex flex-col md:flex-row items-center gap-2 text-center ${language === "ar" ? "md:flex-row-reverse" : ""}`}
            >
              <p className="text-xs text-gray-400">{currentContent.copyright}</p>
              <span className="hidden md:inline text-gray-400">•</span>
              <p className="text-xs text-gray-400">{currentContent.builtWith}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
