"use client"

import { useState } from "react"
import { Globe } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang = language === "fr" ? "ar" : "fr"
    setLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
      aria-label={language === "fr" ? "Changer en arabe" : "تغيير إلى الفرنسية"}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "fr" ? "العربية" : "Français"}</span>
    </button>
  )
}

