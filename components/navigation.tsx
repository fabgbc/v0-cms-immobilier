"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"
import { Logo } from "./logo"

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
  },
}

const menuItemVariants = {
  closed: { opacity: 0, x: -16 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  }),
}

const navLinkClass =
  "px-3 py-2.5 text-[13px] whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors relative group focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  const nav = {
    fr: {
      owners: "Propriétaires",
      agencies: "Agences immobilières",
      features: "Fonctionnalités",
      faq: "FAQ",
      bookings: "Obtenez plus de réservations",
      demo: "Demander une démo",
      tryDemo: "Démo",
    },
    en: {
      owners: "Property Owners",
      agencies: "Real Estate Agencies",
      features: "Features",
      faq: "FAQ",
      bookings: "Get More Bookings",
      demo: "Request a Demo",
      tryDemo: "Demo",
    },
  }

  const t = nav[language]

  const mobileLinks = [
    { href: "/proprietaires", label: t.owners },
    { href: "/agences-immobilieres", label: t.agencies },
    { href: "/features", label: t.features },
    { href: "/demo", label: t.tryDemo },
    { href: "/faq", label: t.faq },
    { href: "/obtenez-plus-de-reservations", label: t.bookings },
  ]

  return (
    <motion.nav
      aria-label="Navigation principale"
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30"
      animate={isScrolled ? "scrolled" : "top"}
      variants={{
        top: {
          backgroundColor: "rgba(255, 252, 248, 0.85)",
          backdropFilter: "blur(8px)",
          height: 80,
        },
        scrolled: {
          backgroundColor: "rgba(255, 252, 248, 0.98)",
          backdropFilter: "blur(16px)",
          height: 64,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        },
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Logo />
            </motion.div>
            <span className="text-lg font-serif font-medium tracking-tight">Saint-Barth Villas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0">
            {[
              { href: "/proprietaires", label: t.owners },
              { href: "/agences-immobilieres", label: t.agencies },
              { href: "/features", label: t.features },
              { href: "/demo", label: t.tryDemo },
              { href: "/faq", label: t.faq },
              { href: "/obtenez-plus-de-reservations", label: t.bookings },
            ].map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
                <motion.span
                  className="absolute inset-x-3 bottom-1 h-px bg-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                  style={{ originX: 0 }}
                />
              </Link>
            ))}
            <LanguageSwitcher />
            <div className="ml-4 pl-4 border-l border-border/50">
              <Button size="sm" variant="luxury" className="font-medium whitespace-nowrap" asChild>
                <Link href="/contact">{t.demo}</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              role="menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden py-6 space-y-1 border-t border-border/30 overflow-hidden"
            >
              {mobileLinks.map((link, i) => (
                <motion.div key={link.href} variants={menuItemVariants} custom={i} initial="closed" animate="open">
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors rounded-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} custom={mobileLinks.length} initial="closed" animate="open">
                <div className="px-4 py-3">
                  <LanguageSwitcher />
                </div>
              </motion.div>
              <motion.div variants={menuItemVariants} custom={mobileLinks.length + 1} initial="closed" animate="open">
                <div className="pt-4 px-4">
                  <Button size="default" variant="luxury" className="w-full font-medium" asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>{t.demo}</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
