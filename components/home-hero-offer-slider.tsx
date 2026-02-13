"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

interface Slide {
  id: string
  label: { fr: string; en: string }
  title: { fr: string; en: string }
  description1: { fr: string; en: string }
  description2: { fr: string; en: string }
  ctaText: { fr: string; en: string }
  ctaLink: string
}

const slides: Slide[] = [
  {
    id: "proprietaires",
    label: { fr: "Propriétaires", en: "Property Owners" },
    title: {
      fr: "Propriétaire, mettez en ligne un site puissant pour vos réservations en direct en 7 jours.",
      en: "Property owners, launch a powerful direct booking website in just 7 days.",
    },
    description1: {
      fr: "Créez le site web officiel de votre villa avec un outil développé pour St Barth et avec de nombreuses fonctionnalités de gestion.",
      en: "Create your villa's official website with a tool developed for St Barth with numerous management features.",
    },
    description2: {
      fr: "Ce n'est pas parce que vous louez cher que votre site doit coûter autant ! Offrez à vos clients un site luxueux et parfaitement paramétré à un prix très abordable.",
      en: "Just because you rent at premium rates doesn't mean your website should cost as much! Offer your clients a luxurious, perfectly configured site at a very affordable price.",
    },
    ctaText: { fr: "Découvrir la solution", en: "Discover the solution" },
    ctaLink: "/proprietaires",
  },
  {
    id: "agences",
    label: { fr: "Agences immobilières", en: "Real Estate Agencies" },
    title: {
      fr: "Agences immobilières, mettez en ligne un puissant site web en seulement 21 jours.",
      en: "Real estate agencies, launch a powerful website in just 21 days.",
    },
    description1: {
      fr: "Pourquoi créer un site de A-Z qui vous coûtera cher lorsque vous pouvez utiliser un outil déjà prêt et adapté pour les agences immobilières avec TOUTES les fonctionnalités dont vous avez besoin ?",
      en: "Why create a website from scratch that will cost you a fortune when you can use a ready-made tool tailored for real estate agencies with ALL the features you need?",
    },
    description2: {
      fr: "Grâce à notre outil, nous réduisons le temps de création, le coût de production tout en proposant un site de qualité et optimisé pour Google.",
      en: "With our tool, we reduce creation time and production costs while delivering a quality site optimized for Google.",
    },
    ctaText: { fr: "Découvrir la solution", en: "Discover the solution" },
    ctaLink: "/agences-immobilieres",
  },
]

const luxuryEase = [0.4, 0, 0.2, 1] as const

// Word-by-word title animation
function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ")
  return (
    <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] text-balance">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.04,
              ease: luxuryEase,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </h1>
  )
}

export function HomeHeroOfferSlider() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      } else {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
      }
      setIsAutoPlaying(false)
    }
  }

  const slide = slides[currentIndex]

  return (
    <section
      className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated shimmer background */}
      <div className="absolute inset-0 shimmer-gold" />

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent)_0%,transparent_50%)] opacity-[0.03]" />

      {/* Floating decorative elements — hidden on mobile for performance */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 float-slow hidden sm:block" />

      <div className="max-w-5xl mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="luxury" className="mb-6 sm:mb-8 text-xs sm:text-sm">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5 fill-accent text-accent" />
              {language === "fr"
                ? "50+ partenaires à Saint-Barth"
                : "50+ partners in Saint-Barth"}
            </Badge>
          </motion.div>

          {/* Carousel Content */}
          <div className="relative min-h-[340px] sm:min-h-[320px] lg:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: luxuryEase }}
                className="text-center"
              >
                {/* Word-by-word title reveal */}
                <AnimatedTitle text={slide.title[language]} />

                {/* Description 1 — fade up with delay */}
                <motion.p
                  className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: luxuryEase }}
                >
                  {slide.description1[language]}
                </motion.p>

                {/* Description 2 — fade up with more delay */}
                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-muted-foreground/70 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55, ease: luxuryEase }}
                >
                  {slide.description2[language]}
                </motion.p>

                {/* CTA Button — scale + fade */}
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: luxuryEase }}
                >
                  <Button
                    asChild
                    size="xl"
                    variant="luxury"
                    className="text-sm sm:text-base group w-full sm:w-auto h-14 sm:h-auto"
                  >
                    <Link href={slide.ctaLink}>
                      {slide.ctaText[language]}
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12" role="tablist" aria-label="Navigation slides">
            {slides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "relative px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-sm text-sm font-medium transition-all duration-300",
                  "hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                  "min-h-[44px] min-w-[44px]",
                  index === currentIndex
                    ? "text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
                role="tab"
                aria-selected={index === currentIndex}
                aria-controls={`slide-${s.id}`}
                aria-label={
                  language === "fr" ? `Aller au slide ${s.label[language]}` : `Go to slide ${s.label[language]}`
                }
              >
                {/* Animated background pill */}
                {index === currentIndex && (
                  <motion.div
                    layoutId="active-slide-pill"
                    className="absolute inset-0 bg-accent rounded-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{s.label[language]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
