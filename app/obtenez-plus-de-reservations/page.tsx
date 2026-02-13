import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Clock, TrendingUp, Target, Lightbulb, Search, Camera, BarChart3 } from "lucide-react"
import { FadeIn } from "@/components/animations"

export const metadata: Metadata = {
  title: "Obtenez Plus de Réservations | Guides & Stratégies",
  description:
    "Guides pratiques et stratégies éprouvées pour maximiser les réservations de vos villas de luxe à Saint-Barthélemy. SEO, marketing, tarification.",
  openGraph: {
    title: "Obtenez Plus de Réservations | Saint-Barth Villas CMS",
    description:
      "Stratégies éprouvées pour maximiser vos réservations de villas de luxe à St Barth.",
  },
}

const articles = [
  {
    icon: Search,
    category: "SEO & Visibilité",
    readTime: "8 min",
    title: "Comment apparaître en première page de Google pour votre villa",
    excerpt:
      "Les techniques concrètes de référencement naturel pour que votre propriété soit trouvée par les voyageurs en recherche active : balises meta, contenu optimisé, données structurées.",
  },
  {
    icon: Camera,
    category: "Photographie",
    readTime: "6 min",
    title: "Photographie immobilière : transformer vos espaces en réservations",
    excerpt:
      "Un guide complet pour réaliser des visuels qui convertissent : angles, luminosité, mise en scène, et les erreurs classiques qui font fuir les locataires potentiels.",
  },
  {
    icon: BarChart3,
    category: "Tarification",
    readTime: "10 min",
    title: "Tarification dynamique : maximiser vos revenus selon les saisons",
    excerpt:
      "Comment adapter intelligemment vos prix en fonction de la haute/basse saison, des événements locaux et de la demande pour optimiser votre taux d'occupation.",
  },
]

const strategies = [
  {
    icon: TrendingUp,
    title: "Réduire la dépendance aux OTAs",
    desc: "Les plateformes comme Airbnb et Booking prélèvent 15 à 25% de commission. Chaque réservation directe via votre site est une économie immédiate de plusieurs centaines d'euros.",
    stat: "15-25%",
    statLabel: "de commission économisée par réservation directe",
  },
  {
    icon: Target,
    title: "Cibler les bons voyageurs",
    desc: "Le SEO local vous connecte avec des voyageurs qui cherchent activement « villa Saint-Barth vue mer ». Ces visiteurs ont une intention d'achat bien plus forte que le trafic des OTAs.",
    stat: "3x",
    statLabel: "de taux de conversion vs trafic OTA",
  },
  {
    icon: Lightbulb,
    title: "Fidéliser votre clientèle",
    desc: "Avec votre propre site, vous récupérez les coordonnées de vos clients. Vous pouvez les recontacter directement pour les saisons suivantes, sans intermédiaire.",
    stat: "60%",
    statLabel: "des réservations viennent de clients fidélisés",
  },
]

export default function ObtienezPlusReservationsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Badge variant="luxury" className="mb-4 sm:mb-6">Stratégies éprouvées</Badge>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 sm:mb-6 leading-[1.1] text-balance">
                Obtenez plus de réservations directes
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto">
                Guides pratiques et stratégies concrètes pour maximiser la visibilité de vos villas et augmenter vos
                réservations sans commission.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stratégies clés */}
        <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-10 sm:mb-14 lg:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
                Pourquoi les réservations directes changent tout
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Trois leviers concrets pour reprendre le contrôle de votre activité.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {strategies.map((strategy, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <Card className="border border-border/50 rounded-sm hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover-lift h-full">
                    <CardContent className="p-5 sm:p-6 lg:p-8">
                      <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-6">
                        <strategy.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="mb-6">
                        <span className="font-serif text-3xl font-medium text-accent">{strategy.stat}</span>
                        <p className="text-xs text-muted-foreground mt-1">{strategy.statLabel}</p>
                      </div>
                      <h3 className="font-serif text-xl font-medium mb-3">{strategy.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{strategy.desc}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Articles / Guides */}
        <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-10 sm:mb-14 lg:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
                Guides pratiques
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                Les ressources essentielles pour transformer votre site en machine à réservations.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {articles.map((article, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <Card className="border border-border/50 rounded-sm hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover-lift h-full group">
                    <CardContent className="p-0">
                      <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                        <article.icon className="h-10 w-10 text-accent/40" />
                      </div>
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-sm">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg font-medium mb-3 group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 pt-4 border-t border-border/30">
                          <span className="text-sm font-medium text-accent flex items-center gap-1">
                            Bientôt disponible
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent)_0%,transparent_50%)] opacity-10" />
          <div className="max-w-4xl mx-auto text-center relative">
            <FadeIn>
              <div className="luxury-divider mb-4 sm:mb-8" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight">
                Prêt à appliquer ces stratégies ?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                Notre CMS intègre automatiquement le SEO, la tarification dynamique et les outils de conversion.
                Concentrez-vous sur vos locations, nous gérons la technique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="luxury" className="h-12 sm:h-auto" asChild>
                  <Link href="/contact">
                    Demander une démo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline-luxury"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-12 sm:h-auto"
                  asChild
                >
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
