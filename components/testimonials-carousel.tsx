"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FadeIn, TextReveal } from "@/components/animations"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

interface Testimonial {
  name: string
  role: { fr: string; en: string }
  quote: { fr: string; en: string }
  stars: number
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: "Jean-Pierre Dupont",
    role: {
      fr: "Propriétaire - Villa Émeraude, Gouverneur",
      en: "Owner - Villa Émeraude, Gouverneur",
    },
    quote: {
      fr: "En 7 jours, mon site était en ligne avec un design magnifique. Les réservations directes ont augmenté de 40% dès le premier mois. Un investissement rentabilisé immédiatement.",
      en: "In 7 days, my site was live with a beautiful design. Direct bookings increased by 40% in the first month. An investment that paid off immediately.",
    },
    stars: 5,
    initials: "JPD",
  },
  {
    name: "Catherine Laurent",
    role: {
      fr: "Directrice - Saint-Barth Luxury Properties",
      en: "Director - Saint-Barth Luxury Properties",
    },
    quote: {
      fr: "La gestion multi-propriétés est un game-changer. Nous gérons 25 villas depuis un seul dashboard. Le CRM et la tarification dynamique nous font gagner des heures chaque semaine.",
      en: "Multi-property management is a game-changer. We manage 25 villas from a single dashboard. The CRM and dynamic pricing save us hours every week.",
    },
    stars: 5,
    initials: "CL",
  },
  {
    name: "Marc Beaumont",
    role: {
      fr: "Propriétaire - Villa Sunset, St Jean",
      en: "Owner - Villa Sunset, St Jean",
    },
    quote: {
      fr: "J'avais un site WordPress lent et coûteux à maintenir. Le passage au CMS a tout changé : rapidité, SEO au top, et je n'ai plus besoin d'un développeur pour chaque modification.",
      en: "I had a slow WordPress site that was expensive to maintain. Switching to the CMS changed everything: fast, great SEO, and I no longer need a developer for every change.",
    },
    stars: 5,
    initials: "MB",
  },
  {
    name: "Sophie Martineau",
    role: {
      fr: "Agence Prestige Immobilier SBH",
      en: "Prestige Real Estate Agency SBH",
    },
    quote: {
      fr: "Le support est exceptionnel et le système de réservation en ligne a considérablement simplifié notre workflow. Nos clients adorent la fluidité du parcours de réservation.",
      en: "The support is exceptional and the online booking system has significantly simplified our workflow. Our clients love the smooth booking experience.",
    },
    stars: 5,
    initials: "SM",
  },
  {
    name: "Philippe Rousseau",
    role: {
      fr: "Propriétaire - Villa Panorama, Colombier",
      en: "Owner - Villa Panorama, Colombier",
    },
    quote: {
      fr: "Le meilleur rapport qualité-prix du marché. Mon site est plus beau que ceux qui m'ont coûté 10 fois plus cher auparavant. Et tout est inclus : hébergement, SSL, maintenance.",
      en: "Best value on the market. My site looks better than ones that cost me 10x more before. And everything is included: hosting, SSL, maintenance.",
    },
    stars: 5,
    initials: "PR",
  },
]

const sectionT = {
  fr: {
    badge: "Témoignages",
    title: "Ce que disent nos clients",
    subtitle: "Des propriétaires et agences de Saint-Barthélemy nous font confiance",
  },
  en: {
    badge: "Testimonials",
    title: "What our clients say",
    subtitle: "Owners and agencies in Saint-Barthélemy trust us",
  },
}

export function TestimonialsCarousel() {
  const { language } = useLanguage()
  const content = sectionT[language]
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  return (
    <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Decorative quote marks — hidden on mobile */}
      <div className="absolute top-20 left-10 opacity-[0.03] hidden sm:block">
        <Quote className="w-40 h-40 text-accent" strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.03] rotate-180 hidden sm:block">
        <Quote className="w-40 h-40 text-accent" strokeWidth={1} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <FadeIn>
            <Badge variant="luxury" className="mb-4 sm:mb-6">{content.badge}</Badge>
          </FadeIn>
          <TextReveal
            as="h2"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight"
          >
            {content.title}
          </TextReveal>
          <FadeIn delay={300}>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{content.subtitle}</p>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  >
                    <motion.div
                      className="bg-card border border-border/50 rounded-sm p-5 sm:p-6 lg:p-8 h-full hover:border-accent/30 transition-all duration-500 card-glow accent-line-top relative group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {/* Decorative quote */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Quote className="w-6 h-6 text-accent/30" />
                      </div>

                      {/* Stars — stagger reveal */}
                      <div className="flex gap-1 mb-4 sm:mb-6">
                        {Array.from({ length: testimonial.stars }).map((_, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: i * 0.1 + j * 0.06,
                              duration: 0.3,
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                            }}
                          >
                            <Star className="w-4 h-4 fill-accent text-accent" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xs sm:text-sm leading-relaxed text-muted-foreground mb-5 sm:mb-8 italic">
                        &ldquo;{testimonial.quote[language]}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4 mt-auto">
                        <motion.div
                          className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-full text-xs font-bold text-accent border border-accent/20"
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          {testimonial.initials}
                        </motion.div>
                        <div>
                          <p className="text-sm font-medium">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role[language]}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
              <motion.button
                onClick={scrollPrev}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-border/50 hover:border-accent/50 hover:bg-accent/5 active:bg-accent/10 transition-all duration-300"
                whileTap={{ scale: 0.95 }}
                aria-label={language === "fr" ? "Témoignage précédent" : "Previous testimonial"}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={cn(
                      "h-2.5 sm:h-2 rounded-full transition-all duration-300 min-w-[10px]",
                      i === selectedIndex
                        ? "bg-accent w-6 sm:w-6"
                        : "bg-border w-2.5 sm:w-2 hover:bg-accent/40"
                    )}
                    onClick={() => emblaApi?.scrollTo(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={scrollNext}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-border/50 hover:border-accent/50 hover:bg-accent/5 active:bg-accent/10 transition-all duration-300"
                whileTap={{ scale: 0.95 }}
                aria-label={language === "fr" ? "Témoignage suivant" : "Next testimonial"}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
