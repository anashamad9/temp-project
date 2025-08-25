"use client";

import { LanguageToggle } from "./language-toggle";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

type Lang = "en" | "ar";

interface NavbarProps {
  language: Lang;
  onLanguageChange: (language: Lang) => void;
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? ""; // "/temp-project" in prod

  const content = {
    en: { company: "Founders Lab", referral: "Make Money", projects: "Projects", services: "Services", contact: "Contact" },
    ar: { company: "فاوندرز لاب", referral: "اربح المال", projects: "المشاريع", services: "الخدمات", contact: "تواصل" },
  };

  const logoSrc = "/FoundersLab.png"; // Next will prepend basePath automatically

  const scrollToServices = () => {
    // If not on home, navigate to home#services-section with basePath
    const isHome = window.location.pathname === `${BP}/` || window.location.pathname === `${BP}`;
    if (!isHome) {
      window.location.href = `${BP}/#services-section`;
      return;
    }
    const el = document.getElementById("services-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-3 z-50 w-full py-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex">
          <nav className="w-full max-w-screen-xl mx-auto rounded-xl border bg-background px-4 py-2 border-zinc-200">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="shrink-0">
                <Link href={`${BP}/`}>
                  <Image src={logoSrc} alt={content[language].company} width={120} height={28} className="w-auto h-6 cursor-pointer" />
                </Link>
              </div>

              <div className="flex items-center gap-2 lg:gap-4 flex-1 justify-center">
                <Link href={`${BP}/make-money?lang=${language}`} className="px-3 py-2 hover:text-foreground transition-colors">
                  <span className={`text-sm font-medium text-black ${language === "ar" ? "font-arabic" : "font-english"}`}>
                    {content[language].referral}
                  </span>
                </Link>
                <Link href={`${BP}/projects?lang=${language}`} className="px-3 py-2 hover:text-foreground transition-colors">
                  <span className={`text-sm font-medium text-black ${language === "ar" ? "font-arabic" : "font-english"}`}>
                    {content[language].projects}
                  </span>
                </Link>
                <button onClick={scrollToServices} className={`px-3 py-2 hover:text-foreground transition-colors text-sm font-medium text-black ${language === "ar" ? "font-arabic" : "font-english"}`}>
                  {content[language].services}
                </button>
                <Link href={`${BP}/contact?lang=${language}`} className="px-3 py-2 hover:text-foreground transition-colors">
                  <span className={`text-sm font-medium text-black ${language === "ar" ? "font-arabic" : "font-english"}`}>
                    {content[language].contact}
                  </span>
                </Link>
              </div>

              <div className="shrink-0">
                <LanguageToggle onLanguageChange={onLanguageChange} currentLanguage={language} />
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile ... keep same, but use `${BP}/...` in hrefs too */}
        {/* ... update Links in the mobile menu the same way as above */}
      </div>
    </div>
  );
}
