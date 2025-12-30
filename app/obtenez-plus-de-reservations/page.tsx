import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, TrendingUp, Target, Lightbulb } from "lucide-react"

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-balance">
                Obtenez plus de réservations
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Guides pratiques, stratégies éprouvées et conseils d'experts pour maximiser les réservations de vos
                villas de luxe à St Barth. Tout ce que vous devez savoir pour dominer votre marché.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="outline" className="border-2 bg-transparent">
                  Tous les articles
                </Button>
                <Button variant="outline" className="border-2 bg-transparent">
                  SEO & Visibilité
                </Button>
                <Button variant="outline" className="border-2 bg-transparent">
                  Tarification
                </Button>
                <Button variant="outline" className="border-2 bg-transparent">
                  Conversion
                </Button>
                <Button variant="outline" className="border-2 bg-transparent">
                  Marketing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Articles à la une</h2>
              <p className="text-lg text-muted-foreground">
                Les guides essentiels pour transformer votre site en machine à réservations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article cards will be added here based on your content */}
              <Card className="border-2 hover:border-accent transition-colors group">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] bg-accent/10 rounded-t-lg flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-accent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="h-4 w-4" />
                      <span>8 min de lecture</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      Article placeholder - En attente de votre contenu
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Description de l'article qui donne envie de cliquer et de lire la suite...
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:gap-2 transition-all">
                      Lire l'article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors group">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] bg-accent/10 rounded-t-lg flex items-center justify-center">
                    <Target className="h-12 w-12 text-accent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="h-4 w-4" />
                      <span>6 min de lecture</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      Article placeholder - En attente de votre contenu
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Description de l'article qui donne envie de cliquer et de lire la suite...
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:gap-2 transition-all">
                      Lire l'article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors group">
                <CardContent className="p-0">
                  <div className="aspect-[16/9] bg-accent/10 rounded-t-lg flex items-center justify-center">
                    <Lightbulb className="h-12 w-12 text-accent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="h-4 w-4" />
                      <span>10 min de lecture</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      Article placeholder - En attente de votre contenu
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Description de l'article qui donne envie de cliquer et de lire la suite...
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:gap-2 transition-all">
                      Lire l'article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* All Articles by Category */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Tous les guides par catégorie</h2>
              <p className="text-lg text-muted-foreground">
                Parcourez nos articles classés par thématique pour trouver exactement ce dont vous avez besoin
              </p>
            </div>

            {/* Category sections will be added here based on your content */}
            <div className="space-y-16">
              <div>
                <div className="flex items-center gap-4 mb-8 pb-4 border-b-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Catégorie placeholder</h3>
                    <p className="text-muted-foreground">Description de la catégorie</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span>5 min</span>
                      </div>
                      <h4 className="font-bold mb-2">Titre d'article placeholder</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Extrait de l'article qui donne envie de lire...
                      </p>
                      <Button variant="link" className="p-0 h-auto text-sm font-semibold">
                        Lire plus
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-accent/5 border-y">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
              Prêt à appliquer ces stratégies ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Notre CMS intègre automatiquement toutes ces bonnes pratiques. Concentrez-vous sur vos locations, nous
              gérons la technique et l'optimisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="/agences-immobilieres">
                  Découvrir le CMS pour agences
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 font-semibold hover:bg-muted bg-transparent"
              >
                <Link href="/proprietaires">Version propriétaires</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
