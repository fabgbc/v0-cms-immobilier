import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/animations"

export const metadata: Metadata = {
  title: "Blog | Conseils & Stratégies Réservations",
  description:
    "Stratégies, conseils et bonnes pratiques pour maximiser la visibilité de vos villas et augmenter vos réservations directes à Saint-Barthélemy.",
  openGraph: {
    title: "Blog | Saint-Barth Villas CMS",
    description:
      "Guides et stratégies pour maximiser vos réservations de villas de luxe à St Barth.",
  },
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-serif">
                  Obtenez plus de réservations
                </h1>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stratégies, conseils et bonnes pratiques pour maximiser la visibilité de vos villas et augmenter vos
                  réservations directes.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Articles à venir</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nous préparons une série d'articles détaillés pour vous aider à maximiser votre taux de réservation.
                Revenez bientôt pour découvrir nos premiers guides.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span>Prochains articles disponibles prochainement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder Categories */}
        <section className="py-20 border-t border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Catégories à venir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "SEO & Référencement",
                  description: "Comment apparaître en première page de Google",
                },
                {
                  title: "Photographie",
                  description: "Mettre en valeur vos villas avec des visuels professionnels",
                },
                {
                  title: "Pricing Strategy",
                  description: "Optimiser vos tarifs selon les saisons et la demande",
                },
                {
                  title: "Marketing Digital",
                  description: "Promouvoir vos villas sur les réseaux sociaux et Google Ads",
                },
                {
                  title: "Conversion",
                  description: "Transformer les visiteurs en demandes de réservation",
                },
                {
                  title: "Gestion Client",
                  description: "Fidéliser vos clients et générer des réservations récurrentes",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-6 bg-background hover:border-accent/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">En attendant, découvrez notre CMS</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pendant que nous préparons ces articles, découvrez comment notre CMS peut vous aider à obtenir plus de
              réservations dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="/agences-immobilieres">
                  Pour les agences <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/proprietaires">Pour les propriétaires</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
