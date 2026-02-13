"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { staggerContainer, fadeInUp } from "@/lib/motion-variants"

const footerLinks = {
  fr: {
    solutions: [
      { href: "/proprietaires", label: "Propriétaires" },
      { href: "/agences-immobilieres", label: "Agences immobilières" },
      { href: "/features", label: "Fonctionnalités" },
    ],
    resources: [
      { href: "/faq", label: "FAQ" },
      { href: "/obtenez-plus-de-reservations", label: "Plus de réservations" },
      { href: "/blog", label: "Blog" },
    ],
    cta: "Demander une démo",
    solutionsLabel: "Solutions",
    resourcesLabel: "Ressources",
    contactLabel: "Contact",
    locationLabel: "Saint-Barthélemy",
    rights: "Tous droits réservés.",
  },
  en: {
    solutions: [
      { href: "/proprietaires", label: "Property Owners" },
      { href: "/agences-immobilieres", label: "Real Estate Agencies" },
      { href: "/features", label: "Features" },
    ],
    resources: [
      { href: "/faq", label: "FAQ" },
      { href: "/obtenez-plus-de-reservations", label: "More Bookings" },
      { href: "/blog", label: "Blog" },
    ],
    cta: "Request a Demo",
    solutionsLabel: "Solutions",
    resourcesLabel: "Resources",
    contactLabel: "Contact",
    locationLabel: "Saint-Barthélemy",
    rights: "All rights reserved.",
  },
}

export function Footer() {
  const { language } = useLanguage()
  const t = footerLinks[language]

  return (
    <footer className="border-t border-border/10 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle shimmer */}
      <div className="absolute inset-0 shimmer-gold opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
        {/* Upper section with logo and CTA */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-12 border-b border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Logo />
              </motion.div>
              <span className="text-xl font-serif font-medium">Saint-Barth Villas</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md text-sm leading-relaxed">
              {language === "fr"
                ? "La plateforme de gestion immobilière de luxe pour Saint-Barthélemy. Créez votre présence en ligne exceptionnelle."
                : "The luxury real estate management platform for Saint-Barthélemy. Create your exceptional online presence."}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 md:mt-0"
          >
            <Button variant="outline-luxury" className="border-accent/50 text-accent hover:bg-accent hover:text-primary group" asChild>
              <Link href="/contact">
                {t.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Navigation grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Solutions */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-label-luxury text-accent mb-6">{t.solutionsLabel}</h3>
            <ul className="space-y-4">
              {t.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors underline-luxury"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ressources */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-label-luxury text-accent mb-6">{t.resourcesLabel}</h3>
            <ul className="space-y-4">
              {t.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors underline-luxury"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-label-luxury text-accent mb-6">{t.contactLabel}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@pandhiweb.com"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  contact@pandhiweb.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+590590278888"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +590 590 27 88 88
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Saint-Barth */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-label-luxury text-accent mb-6">{t.locationLabel}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Gustavia, Saint-Barthélemy<br />
              97133, Antilles françaises
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-primary-foreground/60 tracking-wide">
            © {new Date().getFullYear()} Saint-Barth Villas. {t.rights}
          </p>
          <div className="flex gap-8">
            <Link href="/mentions-legales" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none">
              Confidentialité
            </Link>
            <Link href="/cgv" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors focus-visible:text-accent focus-visible:outline-none">
              CGV
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
