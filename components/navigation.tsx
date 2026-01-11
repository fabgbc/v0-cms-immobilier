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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Luxury style */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold-dark" />
            <span className="text-lg font-serif font-medium tracking-tight">Saint-Barth Villas</span>
          </Link>

          {/* Desktop Navigation - Refined */}
          <div className="hidden md:flex items-center gap-0.5">
            <Link
              href="/proprietaires"
              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.owners}
              <span className="absolute inset-x-4 bottom-1 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              href="/agences-immobilieres"
              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.agencies}
              <span className="absolute inset-x-4 bottom-1 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              href="/features"
              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.features}
              <span className="absolute inset-x-4 bottom-1 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              href="/faq"
              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.faq}
              <span className="absolute inset-x-4 bottom-1 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              href="/obtenez-plus-de-reservations"
              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.bookings}
              <span className="absolute inset-x-4 bottom-1 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <LanguageSwitcher />
            <div className="ml-6 pl-6 border-l border-border/50">
              <Button size="sm" variant="luxury" className="font-medium" asChild>
                <Link href="/contact">{t.demo}</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu - Luxury style */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-1 border-t border-border/30">
            <Link
              href="/proprietaires"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.owners}
            </Link>
            <Link
              href="/agences-immobilieres"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.agencies}
            </Link>
            <Link
              href="/features"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.features}
            </Link>
            <Link
              href="/faq"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.faq}
            </Link>
            <Link
              href="/obtenez-plus-de-reservations"
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.bookings}
            </Link>
            <div className="px-4 py-3">
              <LanguageSwitcher />
            </div>
            <div className="pt-4 px-4">
              <Button size="default" variant="luxury" className="w-full font-medium" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>{t.demo}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
