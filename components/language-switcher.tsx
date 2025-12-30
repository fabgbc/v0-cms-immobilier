"use client"

import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "fr" ? "en" : "fr")} className="gap-2">
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "fr" ? "EN" : "FR"}</span>
    </Button>
  )
}
