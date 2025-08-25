"use client"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

interface LanguageToggleProps {
  onLanguageChange: (language: "en" | "ar") => void
  currentLanguage: "en" | "ar"
}

export function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === "en" ? "ar" : "en")}
      className="p-2"
    >
      <Languages className="h-3 w-3" />
      <span className="sr-only">{currentLanguage === "en" ? "Switch to Arabic" : "Switch to English"}</span>
    </Button>
  )
}
