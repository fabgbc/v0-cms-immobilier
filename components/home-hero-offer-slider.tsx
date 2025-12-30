"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
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
    ctaText: { fr: "Découvrir la solution pour propriétaires", en: "Discover the solution for owners" },
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
    ctaText: { fr: "Découvrir la solution pour agences immobilières", en: "Discover the solution for agencies" },
    ctaLink: "/agences-immobilieres",
  },
]

export function HomeHeroOfferSlider() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Pause auto-play when user manually navigates
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

  return (
    <section
      className="pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 mx-auto block w-fit">
            <Star className="w-3.5 h-3.5 mr-1.5 fill-accent text-accent" />
            {language === "fr"
              ? "Utilisé par 50+ agences et propriétaires à St Barth"
              : "Used by 50+ agencies and owners in St Barth"}
          </Badge>

          {/* Carousel Content */}
          <div className="relative min-h-[400px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
                aria-hidden={index !== currentIndex}
              >
                <div className="text-center">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-balance">
                    {slide.title[language]}
                  </h1>

                  <p className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                    {slide.description1[language]}
                  </p>

                  <p className="text-base lg:text-lg text-muted-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
                    {slide.description2[language]}
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base"
                  >
                    <Link href={slide.ctaLink}>
                      {slide.ctaText[language]}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-12" role="tablist" aria-label="Navigation slides">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  "hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                  index === currentIndex
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground",
                )}
                role="tab"
                aria-selected={index === currentIndex}
                aria-controls={`slide-${slide.id}`}
                aria-label={
                  language === "fr" ? `Aller au slide ${slide.label[language]}` : `Go to slide ${slide.label[language]}`
                }
              >
                {slide.label[language]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
