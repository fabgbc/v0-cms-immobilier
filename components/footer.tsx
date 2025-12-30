import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-accent rounded-md" />
              <span className="text-lg font-semibold tracking-tight">Création site immobilier St Barth</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              La plateforme de gestion immobilière complète pour les professionnels et propriétaires à Saint-Barthélemy.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/proprietaires"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Propriétaires
                </Link>
              </li>
              <li>
                <Link
                  href="/agences-immobilieres"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Agences immobilières
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Ressources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/obtenez-plus-de-reservations"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Obtenez plus de réservations
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Demander une démo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@cms-immo.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@cms-immo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+590590000000"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +590 590 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Création site immobilier St Barth. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
