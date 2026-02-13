import type { Metadata } from "next"
import {
  ArrowRight,
  Check,
  Home,
  Calendar,
  Repeat,
  MessageSquare,
  Globe,
  Settings,
  Shield,
  Star,
  X,
  Users,
  BookOpen,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Solution Propriétaires | Site Officiel pour Votre Villa",
  description:
    "Créez le site officiel de votre villa à Saint-Barthélemy. Réservations directes sans commission, SEO natif, design premium. Solution clé en main.",
  openGraph: {
    title: "Solution Propriétaires | Saint-Barth Villas CMS",
    description:
      "Créez le site officiel de votre villa. Réservations directes, 0% commission OTA, référencement Google optimisé.",
  },
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, StaggerChildren } from "@/components/animations"
import { StatCard } from "@/components/animations/counter"

export default function ProprietairesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                  <Home className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Pour les propriétaires</span>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] text-balance font-serif">
                  Le site officiel de votre villa,{" "}
                  <span className="text-accent">avec la puissance d'une agence immobilière</span>
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
                  Aujourd'hui, les agences immobilières disposent d'outils puissants pour vendre, louer et gérer des
                  villas en ligne. Notre solution rend enfin cette technologie accessible directement aux propriétaires,
                  sans intermédiaire, sans complexité, et sans dépendre d'une agence.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-lg text-muted-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Votre villa dispose ainsi de son propre site officiel, à votre nom, avec vos couleurs, votre identité —
                  et surtout avec des fonctionnalités avancées habituellement réservées aux professionnels.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                    <Link href="/contact">
                      Demander une démo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    Voir comment ça marche
                  </Button>
                </div>
              </FadeIn>

              {/* Stats Bar */}
              <FadeIn delay={500}>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                  <StatCard value={0} suffix="%" label="Commission OTA" valueClassName="text-accent" />
                  <div className="text-center">
                    <div className="font-serif text-4xl lg:text-5xl font-medium mb-2 text-accent">24/7</div>
                    <div className="text-sm text-muted-foreground">Réservations directes</div>
                  </div>
                  <StatCard value={100} suffix="%" label="Autonome" valueClassName="text-accent" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <Badge className="mb-4">Ce que vous obtenez concrètement</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight font-serif">Un site qui travaille pour vous</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Toutes les fonctionnalités d'une agence professionnelle, adaptées à votre usage
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn delay={100}>
                <Card className="border-2 hover:border-accent transition-colors hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <img
                        src="/images/site-20web.jpg"
                        alt="Site officiel vérifié"
                        className="w-full h-48 object-cover image-luxury"
                      />
                    </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6">
                    <Home className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Un site officiel à votre image</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Site brandé "Site officiel de la villa"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Design haut de gamme, moderne et rassurant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Identité visuelle personnalisée (logo, couleurs, ton)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Aucun logo tiers, aucune plateforme concurrente visible</span>
                    </li>
                  </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border-2 hover:border-accent transition-colors hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <img
                        src="/images/re-cc-81servation-20en-20direct.jpg"
                        alt="Notification de réservation directe"
                        className="w-full h-48 object-cover image-luxury"
                      />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6">
                      <Calendar className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Réservations & disponibilités en direct</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Simulation de réservation automatique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Calcul du prix réel (dates, durée, saisons, chambres, taxes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Gestion simple du planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Blocage de dates en un clic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Réservations en direct, sans commission OTA</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="border-2 hover:border-accent transition-colors hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <img src="/images/otas.png" alt="Synchronisation OTAs" className="w-full h-48 object-cover image-luxury" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6">
                      <Repeat className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Connexion avec les plateformes (OTAs)</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Synchronisation des calendriers avec Airbnb, Booking, VRBO</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Évite les doubles réservations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Votre site devient le point central de gestion</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={400}>
                <Card className="border-2 hover:border-accent transition-colors hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <img
                        src="/images/gestion-20des-20demandes.jpg"
                        alt="Gestion des demandes"
                        className="w-full h-48 object-cover image-luxury"
                      />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6">
                      <MessageSquare className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Gestion des demandes simplifiée</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Réception des demandes via le site</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Notifications par email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Tableau de bord pour suivre toutes les demandes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Contact direct possible via WhatsApp</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={500}>
                <Card className="border-2 hover:border-accent transition-colors hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <img src="/images/seo.png" alt="Visibilité Google" className="w-full h-48 object-cover image-luxury" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Visibilité Google & référencement</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Structure SEO-native (sans WordPress)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Pages optimisées pour Google</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Visibilité renforcée sur recherches locales et internationales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Contenus optimisés et traduits</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={600}>
                <Card className="border-2 hover:border-accent transition-colors hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 rounded-xl overflow-hidden">
                      <img
                        src="/images/cle-cc-81-20en-20main.png"
                        alt="Solution multi-device"
                        className="w-full h-48 object-cover image-luxury"
                      />
                    </div>
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-bold mb-2">Une solution clé en main</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Mise en place rapide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Aucun aspect technique à gérer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Hébergement inclus + Sécurité renforcée + Sauvegardes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Assistance quasi 24/7</span>
                      </li>
                    <li className="flex items-start gap-2 font-medium text-foreground">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Vous êtes 100% autonome, mais jamais seul</span>
                    </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Before/After Showcase */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <Badge className="mb-4">Comparaison</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight font-serif">
                  Reprenez le contrôle de votre distribution
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  La différence entre dépendre des OTAs et posséder votre canal direct
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12">
              <FadeIn direction="left" delay={100}>
                <Card className="border-2 border-red-500/20 bg-red-500/5 h-full">
                  <CardContent className="p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-500 rounded-full mb-6 text-sm font-medium">
                    Sans site officiel
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Dépendance totale aux plateformes</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">15-20% de commission sur chaque réservation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Aucune visibilité sur Google pour votre villa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Vos clients sont les clients d'Airbnb, pas les vôtres
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Impossible de créer une relation directe avec vos locataires
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Vous êtes noyé parmi des milliers d'autres annonces</span>
                    </li>
                  </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="right" delay={200}>
                <Card className="border-2 border-green-500/20 bg-green-500/5 h-full">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 rounded-full mb-6 text-sm font-medium">
                      Avec votre site CMS
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Vous possédez votre canal de réservation</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">0% de commission sur les réservations directes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">Votre villa apparaît en première page Google</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">Vous construisez votre propre base de clients fidèles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">Communication directe via email ou WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">Votre villa se démarque avec son identité unique</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-pink-500/10 text-pink-600 border-pink-500/20">Nos Réalisations</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight font-serif">
                  Des propriétaires qui nous font confiance
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Découvrez les sites web que nous avons créés pour des villas de luxe à Saint-Barthélemy
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Villa O'Calm */}
              <FadeIn delay={100}>
                <a href="https://villaocalm.com/" target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <Card className="overflow-hidden border hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover-lift">
                    <div className="aspect-[4/3] overflow-hidden relative">
                    <Badge className="absolute top-4 left-4 z-10 bg-pink-500 hover:bg-pink-500 text-white">
                      Immobilier
                    </Badge>
                    <img
                      src="/modern-luxury-villa-with-infinity-pool-ocean-view-.jpg"
                      alt="Villa O'Calm"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between flex-1">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Villa O'Calm</h3>
                        <span className="text-sm text-muted-foreground">Saint Barth</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Site web vitrine pour villa de luxe privée avec système de réservation et maintenance
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <Badge variant="outline" className="text-xs">
                        WordPress
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Réservation
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Multilingue
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Maintenance
                      </Badge>
                    </div>
                    </CardContent>
                </Card>
              </a>
              </FadeIn>

              {/* Villa Carmen SBH */}
              <FadeIn delay={200}>
                <a href="https://villacarmensbh.com/" target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <Card className="overflow-hidden border hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover-lift">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <Badge className="absolute top-4 left-4 z-10 bg-pink-500 hover:bg-pink-500 text-white">
                        Immobilier
                      </Badge>
                      <img
                        src="/elegant-white-villa-with-pool-tropical-setting-sai.jpg"
                        alt="Villa Carmen SBH"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between flex-1">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                            Villa Carmen SBH
                          </h3>
                          <span className="text-sm text-muted-foreground">Saint Barth</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Site web vitrine pour villa privée de luxe à Saint-Barthélemy
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <Badge variant="outline" className="text-xs">
                          WordPress
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Réservation
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Multilingue
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Maintenance
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </FadeIn>

              {/* Issayah Villa */}
              <FadeIn delay={300}>
                <a href="https://issayah-villa.com/" target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <Card className="overflow-hidden border hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover-lift">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <Badge className="absolute top-4 left-4 z-10 bg-pink-500 hover:bg-pink-500 text-white">
                        Immobilier
                      </Badge>
                      <img
                        src="/contemporary-wooden-villa-with-infinity-pool-deck-.jpg"
                        alt="Issayah Villa"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between flex-1">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Issayah Villa</h3>
                          <span className="text-sm text-muted-foreground">Saint Barth</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Site web vitrine avec stratégie webmarketing et campagnes publicitaires pour villa de luxe
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <Badge variant="outline" className="text-xs">
                          WordPress
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Réservation
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Webmarketing
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Google Ads
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Maintenance
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </FadeIn>

              {/* Sweet Hill */}
              <FadeIn delay={400}>
                <a href="https://sweet-hill.com/" target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <Card className="overflow-hidden border hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover-lift">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <Badge className="absolute top-4 left-4 z-10 bg-pink-500 hover:bg-pink-500 text-white">
                        Immobilier
                      </Badge>
                      <img
                        src="/luxury-hillside-villa-with-nature-views-tropical-l.jpg"
                        alt="Sweet Hill"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between flex-1">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Sweet Hill</h3>
                          <span className="text-sm text-muted-foreground">Saint Barth</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Site web vitrine pour villa privée avec maintenance continue
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <Badge variant="outline" className="text-xs">
                          WordPress
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Réservation
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Multilingue
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Maintenance
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Témoignage</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Résultats concrets</h2>
            </div>

            <Card className="border-2 border-accent/20 bg-accent/5">
              <CardContent className="p-10">
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-accent fill-accent" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl mb-8 leading-relaxed text-center">
                  "J'ai lancé mon site en mars. En 6 mois, j'ai reçu 47 demandes directes et signé 12 réservations sans
                  payer un centime de commission. Le site s'est rentabilisé dès la 3ème location. Je ne retournerai
                  jamais en arrière."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Home className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Marie-Claire Beaumont</div>
                    <div className="text-muted-foreground">Propriétaire, Villa Horizon Bleu - Gustavia</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Pour qui ?</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Cette solution est faite pour vous si...
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <p className="font-medium">Vous voulez augmenter vos réservations directes</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">📉</div>
                  <p className="font-medium">Vous êtes lassé des commissions élevées</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <p className="font-medium">Votre villa haut de gamme mérite une image premium</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <p className="font-medium">Vous souhaitez reprendre le contrôle de votre distribution</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <p className="font-medium">Vous voulez construire votre propre base clients</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <p className="font-medium">Vous cherchez une solution simple et autonome</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Garanties</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Aucune compétence technique requise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nous gérons tout pour que vous puissiez vous concentrer sur vos locataires
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Infrastructure gérée</h3>
                  <p className="text-sm text-muted-foreground">Hébergement, sécurité, sauvegardes, tout est inclus</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Support humain</h3>
                  <p className="text-sm text-muted-foreground">Assistance disponible quasi 24/7 par chat ou email</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Check className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Système éprouvé</h3>
                  <p className="text-sm text-muted-foreground">Déjà utilisé par des agences professionnelles</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Mises à jour auto</h3>
                  <p className="text-sm text-muted-foreground">Nouvelles fonctionnalités ajoutées régulièrement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Showcase Section */}
        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Découvrez nos autres solutions</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Des outils pour optimiser votre activité
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complétez votre écosystème digital avec nos solutions innovantes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* CRM Immobilier */}
              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">CRM Immobilier</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Gérez vos contacts, suivez vos prospects et automatisez votre communication avec un CRM pensé pour
                    l'immobilier de luxe à Saint-Barthélemy.
                  </p>
                  <Button asChild variant="outline" className="w-full group bg-transparent">
                    <a href="/crm-immobilier">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Guestbook Numérique */}
              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Guestbook Numérique</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Offrez une expérience 5 étoiles à vos locataires avec un guide numérique interactif accessible
                    depuis leur smartphone.
                  </p>
                  <Button asChild variant="outline" className="w-full group bg-transparent">
                    <a href="/guestbook-numerique">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Obtenez plus de réservations */}
              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl rounded-2xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Obtenez plus de réservations</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Découvrez nos stratégies éprouvées et conseils d'experts pour maximiser vos réservations directes et
                    votre taux d'occupation.
                  </p>
                  <Button asChild variant="outline" className="w-full group bg-transparent">
                    <a href="/blog">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                  Votre villa mérite plus qu'une simple annonce
                </h2>
                <p className="text-2xl text-muted-foreground mb-8">Elle mérite son propre site officiel</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8"
                    asChild
                  >
                    <Link href="/contact">
                      Demander une démo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Réponse sous 24h • Démo personnalisée • Sans engagement
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
