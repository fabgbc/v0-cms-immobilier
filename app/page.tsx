"use client"

import { ArrowRight, Check, Shield, Zap, Globe, Lock, Building2, Home, TrendingUp, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomeHeroOfferSlider } from "@/components/home-hero-offer-slider"
import { useLanguage } from "@/lib/language-context"
import { FadeIn, StaggerChildren, ParallaxImage, TextReveal } from "@/components/animations"
import { MagneticButton } from "@/components/motion-button"
import { PricingSection } from "@/components/pricing-section"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { AnimatedCounter } from "@/components/animations/counter"
import { staggerContainer, fadeInUp, scaleBlurIn } from "@/lib/motion-variants"
import React from "react"

const featureIcons = [Globe, Shield, Zap, Check, Lock, Globe, Zap, Shield]

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
      stats: [
        { value: 50, suffix: "+", label: "Partenaires" },
        { value: 98, suffix: "%", label: "Satisfaction" },
        { value: 7, suffix: "j", label: "Mise en ligne" },
        { value: 40, suffix: "%", label: "Plus de réservations" },
      ],
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
      demo: {
        badge: "Démo interactive",
        title: "Voyez le CMS en action",
        subtitle: "Testez notre interface d'administration et observez le résultat en temps réel",
        cta: "Essayer la démo interactive",
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
      cta: {
        title: "Prêt à transformer votre activité ?",
        subtitle: "Rejoignez les professionnels qui nous font confiance à Saint-Barthélemy",
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
      stats: [
        { value: 50, suffix: "+", label: "Partners" },
        { value: 98, suffix: "%", label: "Satisfaction" },
        { value: 7, suffix: "d", label: "Go-live" },
        { value: 40, suffix: "%", label: "More bookings" },
      ],
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
      demo: {
        badge: "Interactive Demo",
        title: "See the CMS in action",
        subtitle: "Test our admin interface and see the result in real time",
        cta: "Try the interactive demo",
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

      <main id="main-content" className="min-h-screen">
        {/* 1. Hero Slider */}
        <HomeHeroOfferSlider />

        {/* Stats band — animated counters */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 shimmer-gold opacity-30" />
          <motion.div
            className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {content.stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-1 sm:mb-2 text-accent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/70 tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 2. Deux profils, un même objectif */}
        <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <FadeIn>
                <Badge variant="luxury" className="mb-4 sm:mb-6">{content.hero.badge}</Badge>
              </FadeIn>
              <TextReveal
                as="h2"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight"
              >
                {content.hero.title}
              </TextReveal>
              <FadeIn delay={300}>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{content.hero.subtitle}</p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <FadeIn direction="left" delay={100}>
                <Card className="border border-border/50 hover:border-accent/30 transition-all duration-500 rounded-sm overflow-hidden card-glow group">
                  <ParallaxImage
                    src="/villa-owner-looking-at-website-on-laptop-in-luxur.jpg"
                    alt="Propriétaire dans sa villa consultant son site web"
                    containerClassName="h-48 sm:h-60 lg:h-72"
                    speed={0.2}
                  >
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center gap-3 sm:gap-4 z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 flex items-center justify-center backdrop-blur-sm">
                        <Home className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-white">{content.owners.title}</h3>
                    </div>
                  </ParallaxImage>
                  <CardContent className="p-5 sm:p-6 lg:p-8">
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{content.owners.desc}</p>
                    <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                      {content.owners.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2.5 sm:gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                        >
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <MagneticButton>
                      <Button variant="luxury" className="w-full group/btn h-12 sm:h-auto" size="lg" asChild>
                        <Link href="/proprietaires">
                          {content.owners.cta}
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="right" delay={200}>
                <Card className="border border-border/50 hover:border-accent/30 transition-all duration-500 rounded-sm overflow-hidden card-glow group">
                  <ParallaxImage
                    src="/modern-luxury-real-estate-office-in-saint-barthele.jpg"
                    alt="Bureau d'agence immobilière à Saint-Barthélemy"
                    containerClassName="h-48 sm:h-60 lg:h-72"
                    speed={0.2}
                  >
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center gap-3 sm:gap-4 z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 flex items-center justify-center backdrop-blur-sm">
                        <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-white">{content.agencies.title}</h3>
                    </div>
                  </ParallaxImage>
                  <CardContent className="p-5 sm:p-6 lg:p-8">
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{content.agencies.desc}</p>
                    <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                      {content.agencies.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2.5 sm:gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                        >
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <MagneticButton>
                      <Button variant="luxury" className="w-full group/btn h-12 sm:h-auto" size="lg" asChild>
                        <Link href="/agences-immobilieres">
                          {content.agencies.cta}
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 3. Sécurité & Performance */}
        <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <FadeIn>
                <Badge variant="luxury" className="mb-4 sm:mb-6">{content.security.badge}</Badge>
              </FadeIn>
              <TextReveal
                as="h2"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight"
              >
                {content.security.title}
              </TextReveal>
              <FadeIn delay={300}>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {content.security.subtitle}
                </p>
              </FadeIn>
            </div>

            <motion.div
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {content.security.cards.map((card, i) => (
                <motion.div key={i} variants={scaleBlurIn}>
                  <Card className="border border-border/50 rounded-sm hover:border-accent/30 transition-all duration-500 card-glow h-full accent-line-top">
                    <CardContent className="p-5 sm:p-6 lg:p-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                        {i === 0 && <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />}
                        {i === 1 && <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />}
                        {i === 2 && <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />}
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">{card.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. CTA Demo */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 shimmer-gold" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent)_0%,transparent_70%)] opacity-[0.04]" />
          <div className="max-w-4xl mx-auto relative">
            <FadeIn className="text-center">
              <Badge variant="luxury" className="mb-4 sm:mb-6">
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5 fill-accent text-accent" />
                {content.demo.badge}
              </Badge>
            </FadeIn>
            <TextReveal
              as="h2"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 sm:mb-4 tracking-tight text-center"
            >
              {content.demo.title}
            </TextReveal>
            <FadeIn delay={300} className="text-center">
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto">{content.demo.subtitle}</p>
              <MagneticButton className="inline-block w-full sm:w-auto">
                <Button size="xl" variant="luxury" className="text-sm sm:text-base group w-full sm:w-auto h-14 sm:h-auto" asChild>
                  <Link href="/demo">
                    {content.demo.cta}
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </FadeIn>
          </div>
        </section>

        {/* 5. Features "Ce que vous aurez" */}
        <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <FadeIn>
                <Badge variant="luxury" className="mb-4 sm:mb-6">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5 text-accent" />
                  {content.features.badge}
                </Badge>
              </FadeIn>
              <TextReveal
                as="h2"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight"
              >
                {content.features.title}
              </TextReveal>
              <FadeIn delay={300}>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {content.features.subtitle}
                </p>
              </FadeIn>
            </div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {content.features.list.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={scaleBlurIn}
                  className="bg-card border border-border/50 rounded-sm p-4 sm:p-6 lg:p-8 hover:border-accent/30 transition-colors duration-500 card-glow h-full accent-line-top"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                    {React.createElement(featureIcons[i], {
                      className: "h-5 w-5 sm:h-6 sm:w-6 text-accent",
                    })}
                  </div>
                  <h3 className="font-serif font-medium mb-1 sm:mb-2 text-base sm:text-lg">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. Pricing interactif */}
        <PricingSection />

        {/* 7. Before/After slider */}
        <BeforeAfterSlider />

        {/* 8. Témoignages carousel */}
        <TestimonialsCarousel />

        {/* 9. CTA final */}
        <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent)_0%,transparent_50%)] opacity-10" />
          <div className="absolute inset-0 shimmer-gold opacity-20" />
          <div className="max-w-4xl mx-auto text-center relative">
            <FadeIn>
              <div className="luxury-divider mb-6 sm:mb-8" />
            </FadeIn>
            <TextReveal
              as="h2"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight"
            >
              {content.cta.title}
            </TextReveal>
            <FadeIn delay={400}>
              <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 text-primary-foreground/80">{content.cta.subtitle}</p>
            </FadeIn>
            <FadeIn delay={600}>
              <MagneticButton className="inline-block w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="luxury"
                  className="text-base sm:text-lg group w-full sm:w-auto h-14 sm:h-auto"
                  asChild
                >
                  <Link href="/contact">
                    {content.cta.button}
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
