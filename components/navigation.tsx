"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language } = useLanguage()

  const nav = {
    fr: {
      owners: "Propriétaires",
      agencies: "Agences immobilières",
      features: "Fonctionnalités",
      faq: "FAQ",
      bookings: "Obtenez plus de réservations",
      demo: "Demander une démo",
    },
    en: {
      owners: "Property Owners",
      agencies: "Real Estate Agencies",
      features: "Features",
      faq: "FAQ",
      bookings: "Get More Bookings",
      demo: "Request a Demo",
    },
  }

  const t = nav[language]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 bg-accent rounded-md" />
            <span className="text-lg font-semibold tracking-tight">Création site immobilier St Barth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/proprietaires"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {t.owners}
            </Link>
            <Link
              href="/agences-immobilieres"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {t.agencies}
            </Link>
            <Link
              href="/features"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {t.features}
            </Link>
            <Link
              href="/faq"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {t.faq}
            </Link>
            <Link
              href="/obtenez-plus-de-reservations"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {t.bookings}
            </Link>
            <LanguageSwitcher />
            <div className="ml-4">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                {t.demo}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-border">
            <Link
              href="/proprietaires"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.owners}
            </Link>
            <Link
              href="/agences-immobilieres"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.agencies}
            </Link>
            <Link
              href="/features"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.features}
            </Link>
            <Link
              href="/faq"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.faq}
            </Link>
            <Link
              href="/obtenez-plus-de-reservations"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.bookings}
            </Link>
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
            <div className="pt-2 px-4">
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                {t.demo}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
