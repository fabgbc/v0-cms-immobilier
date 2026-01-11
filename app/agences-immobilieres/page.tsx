import {
  ArrowRight,
  Check,
  TrendingUp,
  Shield,
  Rocket,
  Home,
  Euro,
  Palette,
  Brain,
  MessageSquare,
  Wrench,
  Zap,
  X,
  RefreshCcw,
  CheckCircle2,
  Sparkles,
  Search,
  Building2,
  Headphones,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations"
import { StatCard } from "@/components/animations/counter"

export default function AgencesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section - Style La Boîte Immo */}
        <section className="relative pt-32 pb-24 px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-balance font-serif">
                  Le CMS n°1 des agences immobilières
                  <br />
                  <span className="text-accent">à Saint-Barthélemy</span>
                </h1>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
                  <strong className="font-semibold text-foreground">Logiciel immobilier</strong> ·{" "}
                  <strong className="font-semibold text-foreground">Conception de site internet</strong> ·{" "}
                  <strong className="font-semibold text-foreground">Outils & services métier</strong>
                </p>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
                    asChild
                  >
                    <Link href="/contact">
                      Demander une démo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent">
                    Télécharger la brochure
                  </Button>
                </div>
              </FadeIn>

              {/* Stats - Style La Boîte Immo */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <FadeIn delay={300}>
                  <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-accent transition-colors hover-lift h-full">
                    <StatCard value={21} label="jours pour lancer" valueClassName="text-accent" />
                  </div>
                </FadeIn>
                <FadeIn delay={400}>
                  <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-accent transition-colors hover-lift h-full">
                    <StatCard value={10} suffix="+" label="agences équipées" valueClassName="text-accent" />
                  </div>
                </FadeIn>
                <FadeIn delay={500}>
                  <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-accent transition-colors hover-lift h-full">
                    <StatCard value={100} suffix="%" label="personnalisable" valueClassName="text-accent" />
                  </div>
                </FadeIn>
                <FadeIn delay={600}>
                  <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-accent transition-colors hover-lift h-full">
                    <div className="font-serif text-4xl lg:text-5xl font-medium mb-2 text-accent">IA</div>
                    <div className="text-sm text-muted-foreground">embarquée</div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition - Alternating sections */}
        <section className="py-20 px-6 lg:px-8 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                    <Rocket className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">logiciel immo</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight font-serif">
                    Un site immobilier aussi puissant qu'une plateforme sur-mesure,{" "}
                    <span className="text-accent">prêt en 21 jours</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Créer un site immobilier performant à Saint-Barthélemy est aujourd'hui un véritable défi. Entre la
                    complexité des tarifs, la gestion des saisons, les OTAs, le référencement, la performance et le design
                    haut de gamme attendu par une clientèle internationale, les projets prennent souvent des mois — pour
                    un résultat parfois décevant.
                  </p>
                  <p className="text-lg font-semibold mb-8">Nous avons fait un autre choix.</p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Découvrir la solution
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={200}>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-background rounded-lg p-4 shadow-lg hover-lift">
                        <div className="text-2xl font-bold text-accent mb-1">appli mobile</div>
                        <div className="text-sm text-muted-foreground">Gérez partout</div>
                      </div>
                      <div className="bg-background rounded-lg p-4 shadow-lg hover-lift">
                        <div className="text-2xl font-bold text-accent mb-1">gestion agence</div>
                        <div className="text-sm text-muted-foreground">Tout centralisé</div>
                      </div>
                      <div className="bg-background rounded-lg p-4 shadow-lg col-span-2 hover-lift">
                        <div className="text-2xl font-bold text-accent mb-1">IA embarquée</div>
                        <div className="text-sm text-muted-foreground">Rédaction automatique</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features Grid - Style La Boîte Immo */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight font-serif">
                  Ce qui change concrètement pour votre agence
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Une plateforme complète qui répond à tous vos besoins métier
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Rocket className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Lancement express en 21 jours</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Architecture déjà développée et éprouvée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Aucun développement from scratch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Déploiement du site en 21 jours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Home className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Gestion des villas ultra fluide</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Ajout et modification en quelques clics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Pages villas premium, pensées conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Import de votre portefeuille existant</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Euro className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Tarifs adaptés à Saint-Barth</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Gestion avancée des saisons locales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Tarification dynamique par chambres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Synchronisation avec les OTAs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <TrendingUp className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Avantage concurrentiel SEO</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Structure SEO-native (sans WordPress)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Chargement ultra rapide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Pages optimisées par villa et quartier</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Palette className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Design unique pour chaque agence</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Design entièrement personnalisé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Identité graphique propre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Aucune similitude entre sites</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Brain className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Intelligence Artificielle embarquée</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Rédaction automatique des descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Optimisation SEO assistée par IA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Gain de temps considérable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 7 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <MessageSquare className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Réservations centralisées</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Réception des demandes depuis le site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Tableau de bord de suivi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Connexion email & WhatsApp</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 8 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Shield className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Solution éprouvée et stable</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Utilisé par plusieurs agences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Testé en conditions réelles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Infrastructure fiable et sécurisée</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 9 */}
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Wrench className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Support & accompagnement</h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Support quasi 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Maintenance continue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Accompagnement humain</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Before/After Comparison Section */}
        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Comparaison</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Avant / Après notre CMS</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Voyez concrètement ce qui change pour votre agence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* AVANT Column */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                    <X className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold">AVANT</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologie & référencement</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Site développé sur mesure ou CMS rigide</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Mise à jour SEO complexe</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Dépendance technique totale</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Pas de données structurées natives</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Gestion des prix & réservations</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Saisie manuelle des tarifs (haute/basse saison)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Surcharge de gestion pour ajuster les prix par chambre</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Synchronisation OTA chronophage</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Erreurs humaines fréquentes</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Expérience utilisateur & conversion</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Parcours utilisateur peu optimisé</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Design standard, peu différenciant</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Navigation complexe pour trouver une villa</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Pas de formulaire de demande rapide</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Évolutivité & maintenance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Correction de bugs payante et lente</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Pas de garantie de disponibilité</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Dépendance à un prestataire externe</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>Coût de maintenance élevé</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* APRÈS Column */}
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Check className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">APRÈS</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologie & performance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>+40% de trafic organique</strong> grâce au SEO natif (balisage schema.org, vitesse
                          optimisée)
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Mise à jour SEO en 2 clics depuis le backoffice</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Système anti-panne avec uptime 99.9%</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Données structurées automatiques pour Google</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Prix & saisons ultra-précis</h4>

                    <p className="text-sm font-medium mb-2">Dashboard centralisé :</p>
                    <ul className="space-y-2 ml-4 mb-3">
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Vue globale des tarifs par villa et période</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Modification en masse (toutes les villas en un clic)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Historique des changements pour comparer les stratégies</span>
                      </li>
                    </ul>

                    <p className="text-sm font-medium mb-2">Prix automatiques :</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Calcul dynamique par nombre de chambres (ex. : 3 chambres = tarif adapté)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Application des tarifs haute/basse saison sans ressaisie</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Synchronisation Airbnb/Booking instantanée</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Gestion centralisée & automatisation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>
                          CRM intégré : toutes les demandes dans une seule interface (sans jongler entre boîtes mail)
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Suivi client automatique : relances, historique des échanges</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Disponibilité en temps réel avec calendrier synchronisé</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Design & conversion</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Parcours utilisateur optimisé pour la réservation</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Formulaire de contact en 30 secondes (nom, dates, villa)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Design premium et adaptatif mobile</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>Galeries photos + vidéos immersives</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Autonomie & tranquillité</h4>

                    <p className="text-sm font-medium mb-2">Maintenance incluse :</p>
                    <ul className="space-y-2 ml-4 mb-4">
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Mises à jour automatiques (0 intervention)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Support technique illimité (réponse sous 24h)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Correction de bugs sans coût additionnel</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-accent">•</span>
                        <span>Backups quotidiens automatiques</span>
                      </li>
                    </ul>

                    <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
                      <p className="text-sm font-medium">
                        ➜ Avant : vous dépendiez d'un développeur. Après : vous pilotez votre business en toute
                        autonomie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Osez le changement - Remplacé section équipe par "Osez le changement" avec deux colonnes */}
        <section className="py-20 px-6 lg:px-8 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Osez le changement</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Votre situation, notre solution</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Que vous ayez déjà un site ou non, nous avons la solution parfaite pour votre agence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Colonne Gauche - J'ai déjà un site */}
              <Card className="border-2 hover:border-accent/50 transition-all rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <RefreshCcw className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">J'ai déjà un site internet</h3>
                  <p className="text-muted-foreground mb-6">
                    Migrer vers notre CMS est une opportunité stratégique pour moderniser votre agence sans perdre vos
                    acquis
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Migration fluide et rapide</h4>
                        <p className="text-sm text-muted-foreground">
                          Nous récupérons vos villas, photos et contenus existants en quelques jours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Gain de temps massif</h4>
                        <p className="text-sm text-muted-foreground">
                          Fini les allers-retours avec un développeur, gérez tout vous-même en quelques clics
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">SEO boosté instantanément</h4>
                        <p className="text-sm text-muted-foreground">
                          Performance technique optimale dès le lancement pour grimper dans Google
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Intelligence artificielle intégrée</h4>
                        <p className="text-sm text-muted-foreground">
                          Descriptions automatiques, traductions instantanées, réponses aux clients assistées
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Design moderne qui convertit</h4>
                        <p className="text-sm text-muted-foreground">
                          Interface premium optimisée pour transformer les visiteurs en réservations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Support technique inclus</h4>
                        <p className="text-sm text-muted-foreground">
                          Équipe disponible 24/7 pour vous accompagner à chaque étape
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Colonne Droite - Pourquoi passer avec nous */}
              <Card className="border-2 hover:border-accent/50 transition-all rounded-2xl overflow-hidden bg-accent/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pourquoi passer avec nous</h3>
                  <p className="text-muted-foreground mb-6">
                    Un site web professionnel est indispensable pour votre agence. Voici pourquoi nous sommes le
                    meilleur choix
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Mise en ligne ultra-rapide</h4>
                        <p className="text-sm text-muted-foreground">
                          Votre site professionnel en ligne en quelques jours au lieu de plusieurs mois
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Palette className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Design 100% personnalisé</h4>
                        <p className="text-sm text-muted-foreground">
                          Interface adaptée à votre image de marque et à vos besoins spécifiques
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Technologie révolutionnaire</h4>
                        <p className="text-sm text-muted-foreground">
                          CMS nouvelle génération avec IA, performance maximale et évolutions continues
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Expérience utilisateur qui convertit</h4>
                        <p className="text-sm text-muted-foreground">
                          Parcours optimisé pour maximiser vos réservations et leads qualifiés
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Search className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">SEO boosté dès le lancement</h4>
                        <p className="text-sm text-muted-foreground">
                          Référencement naturel optimisé pour dominer les résultats Google
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Ajout illimité de villas</h4>
                        <p className="text-sm text-muted-foreground">
                          Importez toutes vos propriétés facilement avec photos, descriptions et disponibilités
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Headphones className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Équipe disponible 24/7</h4>
                        <p className="text-sm text-muted-foreground">
                          Support technique réactif et accompagnement personnalisé en continu
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Prix imbattable</h4>
                        <p className="text-sm text-muted-foreground">
                          Coût réduit grâce à notre CMS clé en main, pas de développement sur-mesure
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Agencies Portfolio */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Nos Réalisations</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Agences qui nous ont fait confiance
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez les sites que nous avons créés pour les principales agences de Saint-Barthélemy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Agency Cards */}
              {[
                {
                  name: "Livin St Barth",
                  description: "Agence immobilière à Saint-Barthélemy",
                  tags: ["WordPress", "SEO"],
                  url: "https://www.livinstbarth.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "AAISB",
                  description: "Association des agences immobilières de Saint Barth",
                  tags: ["WordPress", "Annuaire"],
                  url: "https://www.aaisb.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "St Barth Villa Rentals",
                  description:
                    "Agence de location de villas de luxe à Saint-Barthélemy avec stratégie digitale complète",
                  tags: ["WordPress", "SEO", "Webmarketing", "Maintenance"],
                  url: "https://www.stbarth-villarentals.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "Premier Properties St Barth",
                  description: "Agence immobilière de prestige à Saint-Barthélemy spécialisée dans les villas de luxe",
                  tags: ["WordPress", "Maintenance"],
                  url: "https://www.premierpro.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "WIMCO Real Estate",
                  description: "Site immobilier professionnel pour agence à Saint-Barthélemy",
                  tags: ["WordPress", "SEO", "Réservation"],
                  url: "https://www.wimco.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "Unique Villas St Barth",
                  description: "Plateforme de location de villas de luxe avec système de réservation",
                  tags: ["Réservation", "Paiement", "Multilingue"],
                  url: "https://www.uniquevillas.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "St Barts Rental",
                  description: "Location de villas de luxe à Saint-Barthélemy",
                  tags: ["Réservation", "SEO", "Multilingue"],
                  url: "https://www.stbartsrental.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "Maison Palmier Blanc",
                  description: "Maison de prestige à Saint-Barthélemy",
                  tags: ["WordPress", "Gallery", "SEO"],
                  url: "https://www.maisonpalmierblanc.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "Barnes St Barth",
                  description:
                    "Stratégie SEO et webmarketing pour l'agence immobilière de luxe Barnes à Saint-Barthélemy",
                  tags: ["SEO", "Webmarketing", "Google Ads"],
                  url: "https://www.barnes-stbarth.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "Art de Vivre Villas",
                  description: "Agence de location de villas avec site web CMS personnalisé et maintenance",
                  tags: ["CMS", "Réservation", "Multilingue", "Maintenance"],
                  url: "https://www.artdevivre-villas.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "Madame Realty",
                  description: "Agence immobilière avec site web CMS, maintenance et stratégie SEO",
                  tags: ["CMS", "SEO", "Maintenance", "Multilingue"],
                  url: "https://www.madamerealty.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
                {
                  name: "St Barts Beyond",
                  description: "Agence de location de villas à Saint-Barthélemy avec site web CMS et maintenance",
                  tags: ["CMS", "Réservation", "Multilingue", "Maintenance"],
                  url: "https://www.stbartsbeyond.com/",
                  image: "/images/capture-20d-e2-80-99e-cc-81cran-202025-12-23-20a-cc-80-2013.png",
                },
              ].map((agency, index) => (
                <Link key={index} href={agency.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="border-2 hover:border-accent transition-all hover:shadow-lg overflow-hidden h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-accent/90 text-accent-foreground hover:bg-accent">Immobilier</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-full h-full bg-accent/5" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{agency.name}</h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">Saint Barth</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{agency.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {agency.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Style La Boîte Immo */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-accent via-accent to-accent/80">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-accent-foreground tracking-tight">
              Vous n'achetez pas un site,
              <br />
              vous accédez à une plateforme métier
            </h2>
            <p className="text-xl text-accent-foreground/90 mb-8 leading-relaxed">
              Prêt à transformer votre présence en ligne et doubler vos demandes de réservation ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 font-semibold text-lg px-8 py-6"
                asChild
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
