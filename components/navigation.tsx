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
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const, staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const menuItemVariants = {
  closed: { opacity: 0, y: 8 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
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
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.inset = "0"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.inset = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.inset = ""
    }
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
    <>
      <motion.nav
        aria-label="Navigation principale"
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/30"
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: {
            backgroundColor: "rgba(255, 252, 248, 0.85)",
            backdropFilter: "blur(8px)",
            height: 72,
          },
          scrolled: {
            backgroundColor: "rgba(255, 252, 248, 0.98)",
            backdropFilter: "blur(16px)",
            height: 60,
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          },
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="shrink-0"
              >
                <Logo />
              </motion.div>
              <span className="text-base sm:text-lg font-serif font-medium tracking-tight truncate">Saint-Barth Villas</span>
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

            {/* Mobile Menu Button — 44px touch target */}
            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 -mr-1.5 rounded-sm active:bg-secondary/50 transition-colors"
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
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/98 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu content */}
            <motion.div
              className="relative flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="flex-1 flex flex-col justify-center -mt-12">
                <div className="space-y-1">
                  {mobileLinks.map((link) => (
                    <motion.div key={link.href} variants={menuItemVariants}>
                      <Link
                        href={link.href}
                        className="flex items-center px-3 py-4 text-lg font-serif text-foreground hover:text-accent active:text-accent transition-colors rounded-sm active:bg-accent/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={menuItemVariants} className="mt-6 px-3">
                  <div className="h-px bg-border/50 mb-6" />
                  <LanguageSwitcher />
                </motion.div>
              </nav>

              <motion.div variants={menuItemVariants} className="px-3 pb-safe">
                <Button size="lg" variant="luxury" className="w-full h-14 text-base font-medium" asChild>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>{t.demo}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
