import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Upper section with logo and CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-12 border-b border-white/10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent" />
              <span className="text-xl font-serif font-medium">Saint-Barth Villas</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md text-sm leading-relaxed">
              La plateforme de gestion immobilière de luxe pour Saint-Barthélemy.
              Créez votre présence en ligne exceptionnelle.
            </p>
          </div>

          <Button variant="outline-luxury" className="mt-6 md:mt-0 border-accent/50 text-accent hover:bg-accent hover:text-primary" asChild>
            <Link href="/contact">Demander une démo</Link>
          </Button>
        </div>

        {/* Navigation grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Solutions */}
          <div>
            <h3 className="text-label-luxury text-accent mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/proprietaires"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Propriétaires
                </Link>
              </li>
              <li>
                <Link
                  href="/agences-immobilieres"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Agences immobilières
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-label-luxury text-accent mb-6">Ressources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/obtenez-plus-de-reservations"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Plus de réservations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-label-luxury text-accent mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@saintbarth-villas.com"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  contact@saintbarth-villas.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+590590000000"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +590 590 00 00 00
                </a>
              </li>
            </ul>
          </div>

          {/* Saint-Barth */}
          <div>
            <h3 className="text-label-luxury text-accent mb-6">Saint-Barthélemy</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Gustavia, Saint-Barthélemy<br />
              97133, Antilles françaises
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50 tracking-wide">
            © 2025 Saint-Barth Villas. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
