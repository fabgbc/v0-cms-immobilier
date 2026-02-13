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

        {/* Featured Articles Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-serif font-medium tracking-tight mb-4">Guides et conseils</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des ressources pratiques pour optimiser votre activité de location à Saint-Barthélemy.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Comment optimiser le SEO de votre villa pour Google",
                  excerpt: "Les techniques essentielles pour apparaître en première page et capter les voyageurs en recherche active.",
                  category: "SEO",
                  readTime: "8 min",
                },
                {
                  title: "Photographie immobilière : les erreurs à éviter",
                  excerpt: "Un guide pratique pour mettre en valeur vos espaces avec des visuels qui convertissent les visiteurs en locataires.",
                  category: "Photographie",
                  readTime: "6 min",
                },
                {
                  title: "Tarification dynamique : maximiser vos revenus par saison",
                  excerpt: "Comment adapter vos prix en fonction de la saison, des événements et de la demande pour optimiser votre chiffre d&apos;affaires.",
                  category: "Pricing",
                  readTime: "10 min",
                },
              ].map((article, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="group border border-border/50 rounded-sm bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover-lift overflow-hidden h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <Calendar className="w-10 h-10 text-accent/30" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-sm">{article.category}</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2 group-hover:text-accent transition-colors">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <span className="text-sm font-medium text-accent flex items-center gap-1">
                          Bientôt disponible
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 border-t border-border/30 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-serif font-medium tracking-tight">Nos thématiques</h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "SEO",
                "Photographie",
                "Pricing",
                "Marketing",
                "Conversion",
                "Fidélisation",
              ].map((cat, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <div className="border border-border/50 rounded-sm p-4 bg-card text-center hover:border-accent/30 transition-all duration-300 hover:shadow-md hover-lift">
                    <span className="text-sm font-medium">{cat}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-border/30">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="luxury-divider mb-8" />
              <h2 className="text-3xl font-serif font-medium tracking-tight mb-4">
                Passez à l&apos;action dès maintenant
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Découvrez comment notre CMS peut vous aider à obtenir plus de réservations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="luxury" asChild>
                  <Link href="/contact">
                    Demander une démo <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/features">Voir les fonctionnalités</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
