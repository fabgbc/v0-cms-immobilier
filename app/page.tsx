"use client"

import { ArrowRight, Check, Shield, Zap, Globe, Lock, Building2, Home, TrendingUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomeHeroOfferSlider } from "@/components/home-hero-offer-slider"
import { useLanguage } from "@/lib/language-context"
import React from "react"

export default function HomePage() {
  const { language } = useLanguage()

  const t = {
    fr: {
      hero: {
        badge: "Pour tous les professionnels",
        title: "Deux profils, un même objectif",
        subtitle: "Que vous soyez propriétaire ou agence, notre solution s'adapte à vos besoins spécifiques",
      },
      owners: {
        title: "Propriétaires",
        desc: "Valorisez votre villa avec un site professionnel. Gérez vos réservations en toute autonomie et maximisez votre visibilité.",
        features: [
          "Site web personnalisé pour votre villa",
          "Système de réservation intégré",
          "Référencement Google optimisé",
          "Maintenance et mises à jour incluses",
        ],
        cta: "En savoir plus",
      },
      agencies: {
        title: "Agences immobilières",
        desc: "Gérez tout votre portfolio avec un CMS puissant. Automatisez vos processus et offrez une expérience premium à vos clients.",
        features: [
          "Gestion centralisée de plusieurs propriétés",
          "Tarification dynamique multi-saisons",
          "CRM et gestion des demandes",
          "Webmarketing et Google Ads intégrés",
        ],
        cta: "En savoir plus",
      },
      security: {
        badge: "Technologie de pointe",
        title: "Sécurité & Performance",
        subtitle: "Infrastructure cloud hautement sécurisée et ultra-rapide pour une expérience utilisateur optimale",
        cards: [
          {
            title: "Sécurité maximale",
            desc: "Certificat SSL, protection DDoS, sauvegardes automatiques et hébergement certifié",
          },
          {
            title: "Performance extrême",
            desc: "Temps de chargement ultra-rapide, CDN mondial et optimisation automatique des images",
          },
          {
            title: "Disponibilité 99.9%",
            desc: "Infrastructure cloud redondante garantissant la continuité de service 24/7",
          },
        ],
      },
      features: {
        badge: "Fonctionnalités complètes",
        title: "Ce que vous aurez",
        subtitle: "Un système complet pensé pour la location de villas de luxe à Saint-Barth",
        list: [
          { title: "SEO natif", desc: "Référencement Google optimisé" },
          { title: "Design premium", desc: "Interface luxe et moderne" },
          { title: "Prix dynamiques", desc: "Par chambre et multi-saisons" },
          { title: "Moteur de recherche", desc: "Filtres avancés et pertinents" },
          { title: "CRM intégré", desc: "Gestion des demandes centralisée" },
          { title: "Multilingue", desc: "FR/EN/ES automatique" },
          { title: "Assistance IA", desc: "Rédaction de contenus optimisés" },
          { title: "Maintenance incluse", desc: "Mises à jour et support" },
        ],
      },
      beforeAfter: {
        title: "Avant / Après notre CMS",
        subtitle: "Découvrez comment nous transformons la gestion immobilière de luxe",
      },
      cta: {
        title: "Prêt à transformer votre activité ?",
        subtitle: "Join the professionals who trust us in Saint-Barthélemy",
        button: "Demander une démo",
      },
    },
    en: {
      hero: {
        badge: "For all professionals",
        title: "Two profiles, one goal",
        subtitle: "Whether you're an owner or an agency, our solution adapts to your specific needs",
      },
      owners: {
        title: "Owners",
        desc: "Showcase your villa with a professional website. Manage your bookings independently and maximize your visibility.",
        features: [
          "Personalized website for your villa",
          "Integrated booking system",
          "Optimized Google SEO",
          "Maintenance and updates included",
        ],
        cta: "Learn more",
      },
      agencies: {
        title: "Real Estate Agencies",
        desc: "Manage your entire portfolio with a powerful CMS. Automate your processes and offer a premium experience to your clients.",
        features: [
          "Centralized management of multiple properties",
          "Dynamic multi-season pricing",
          "CRM and request management",
          "Integrated webmarketing and Google Ads",
        ],
        cta: "Learn more",
      },
      security: {
        badge: "Cutting-edge technology",
        title: "Security & Performance",
        subtitle: "Highly secure and ultra-fast cloud infrastructure for optimal user experience",
        cards: [
          {
            title: "Maximum security",
            desc: "SSL certificate, DDoS protection, automatic backups and certified hosting",
          },
          {
            title: "Extreme performance",
            desc: "Ultra-fast loading times, global CDN and automatic image optimization",
          },
          {
            title: "99.9% availability",
            desc: "Redundant cloud infrastructure ensuring 24/7 service continuity",
          },
        ],
      },
      features: {
        badge: "Complete features",
        title: "What you'll get",
        subtitle: "A complete system designed for luxury villa rentals in St. Barth",
        list: [
          { title: "Native SEO", desc: "Optimized Google ranking" },
          { title: "Premium design", desc: "Luxury and modern interface" },
          { title: "Dynamic pricing", desc: "Per room and multi-season" },
          { title: "Search engine", desc: "Advanced and relevant filters" },
          { title: "Integrated CRM", desc: "Centralized request management" },
          { title: "Multilingual", desc: "FR/EN/ES automatic" },
          { title: "AI assistance", desc: "Optimized content writing" },
          { title: "Maintenance included", desc: "Updates and support" },
        ],
      },
      beforeAfter: {
        title: "Before / After our CMS",
        subtitle: "Discover how we transform luxury real estate management",
      },
      cta: {
        title: "Ready to transform your business?",
        subtitle: "Join the professionals who trust us in Saint-Barthélemy",
        button: "Request a demo",
      },
    },
  }

  const content = t[language]

  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        <HomeHeroOfferSlider />

        {/* Section Deux profils, un même objectif */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 rounded-full px-4 py-2">{content.hero.badge}</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">{content.hero.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{content.hero.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl rounded-[1.5rem] overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src="/villa-owner-looking-at-website-on-laptop-in-luxur.jpg"
                    alt="Propriétaire dans sa villa consultant son site web"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/95 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Home className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{content.owners.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{content.owners.desc}</p>
                  <ul className="space-y-2.5 mb-5">
                    {content.owners.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90 rounded-xl h-11" size="lg">
                    {content.owners.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl rounded-[1.5rem] overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src="/modern-luxury-real-estate-office-in-saint-barthele.jpg"
                    alt="Bureau d'agence immobilière à Saint-Barthélemy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/95 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{content.agencies.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{content.agencies.desc}</p>
                  <ul className="space-y-2.5 mb-5">
                    {content.agencies.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90 rounded-xl h-11" size="lg">
                    {content.agencies.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section Sécurité & Performance */}
        <section className="py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 rounded-full px-4 py-2">{content.security.badge}</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">{content.security.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {content.security.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {content.security.cards.map((card, i) => (
                <Card
                  key={i}
                  className="border-2 rounded-[1.5rem] hover:border-accent/50 transition-all hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
                      {i === 0 && <Shield className="h-6 w-6 text-accent" />}
                      {i === 1 && <Zap className="h-6 w-6 text-accent" />}
                      {i === 2 && <TrendingUp className="h-6 w-6 text-accent" />}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section Ce que vous aurez */}
        <section className="py-24 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 rounded-full px-4 py-2">{content.features.badge}</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">{content.features.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {content.features.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.features.list.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-border rounded-[1.5rem] p-8 hover:border-accent/50 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
                    {[Globe, Shield, Zap, Check, Lock, Globe, Zap, Shield][i] &&
                      React.createElement([Globe, Shield, Zap, Check, Lock, Globe, Zap, Shield][i], {
                        className: "h-6 w-6 text-accent",
                      })}
                  </div>
                  <h3 className="font-bold mb-2 text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Avant / Après */}
        <section className="py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">{content.beforeAfter.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{content.beforeAfter.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Colonne AVANT */}
              <div>
                <div className="bg-destructive/5 border-2 border-destructive/20 rounded-[1.5rem] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                      <X className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="text-2xl font-bold">AVANT</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 text-lg">Technologie & référencement</h4>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Sites lents et mal optimisés pour le SEO</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Mauvais classement Google = peu de visibilité</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Contenus dupliqués sans stratégie SEO locale</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-lg">Gestion des prix & réservations</h4>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Tarification fixe ou manuelle, impossible à gérer finement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Pas de variation par chambre ou nombre d'invités</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Calendriers déconnectés = risque de double réservation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-lg">Expérience utilisateur & conversion</h4>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Design daté et peu adapté au luxe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Parcours de réservation compliqué et décourageant</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Pas de version mobile ou expérience dégradée</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-lg">Évolutivité & maintenance</h4>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Sites figés, difficiles à modifier sans développeur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Bugs fréquents et sécurité obsolète</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                          <span>Coûts de maintenance imprévisibles et élevés</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne APRÈS */}
              <div>
                <div className="bg-accent/5 border-2 border-accent/30 rounded-[1.5rem] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Check className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">APRÈS</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 text-lg">Technologie & performance</h4>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>+40% de trafic organique grâce au SEO natif</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>Temps de chargement ultra-rapide (score 95+/100)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>Contenus optimisés pour "villa luxe Saint-Barth"</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-lg">Prix & saisons ultra-précis</h4>
                      <div className="space-y-4">
                        <div className="ml-6 space-y-3">
                          <p className="text-sm font-semibold text-foreground">Dashboard centralisé :</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Vue d'ensemble de toutes vos propriétés</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Statistiques en temps réel</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Gestion multi-propriété simplifiée</span>
                            </li>
                          </ul>
                        </div>

                        <div className="ml-6 space-y-3">
                          <p className="text-sm font-semibold text-foreground">Prix automatiques :</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Par nombre de chambres occupées</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Par nombre d'invités (adultes/enfants)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Saisons multiples (haute, moyenne, basse)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Tarifs événements (Noël, Nouvel An...)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-lg">Gestion centralisée & automatisation</h4>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>CRM intégré pour gérer toutes vos demandes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>Synchronisation calendriers automatique</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>Notifications instantanées email + SMS</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-lg">Design & conversion</h4>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>Design haut de gamme adapté au luxe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>+60% de conversions avec parcours optimisé</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>Responsive parfait sur mobile/tablette</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-lg">Autonomie & tranquillité</h4>
                      <div className="space-y-4">
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span>Interface intuitive, aucune compétence technique requise</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span>Modifications en temps réel sans délai</span>
                          </li>
                        </ul>

                        <div className="ml-6 space-y-3">
                          <p className="text-sm font-semibold text-foreground">Maintenance incluse :</p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Mises à jour automatiques</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Support technique réactif</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span>Sécurité et sauvegardes garanties</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-accent/10 border-2 border-accent/30 rounded-2xl">
                    <p className="text-sm font-semibold text-center">
                      💡 Résultat : vous gagnez du temps, générez plus de réservations, et offrez une expérience client
                      premium digne de Saint-Barth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-32 px-6 lg:px-8 relative overflow-hidden bg-accent text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">{content.cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">{content.cta.subtitle}</p>
            <Button
              size="lg"
              className="bg-white text-accent hover:bg-white/90 rounded-xl h-12 px-8 text-lg font-semibold"
            >
              {content.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
