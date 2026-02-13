"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, type PanInfo } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { FadeIn, TextReveal } from "@/components/animations"

const t = {
  fr: {
    title: "Avant / Après notre CMS",
    subtitle: "Découvrez comment nous transformons la gestion immobilière de luxe",
    before: "Avant",
    after: "Après",
    beforeItems: [
      "Sites lents et mal optimisés",
      "Design daté, pas adapté au luxe",
      "Tarification fixe et manuelle",
      "Pas de version mobile",
      "Maintenance coûteuse",
    ],
    afterItems: [
      "Performance 95+/100",
      "Design haut de gamme",
      "Prix dynamiques multi-saisons",
      "Responsive parfait",
      "Maintenance incluse",
    ],
  },
  en: {
    title: "Before / After our CMS",
    subtitle: "Discover how we transform luxury real estate management",
    before: "Before",
    after: "After",
    beforeItems: [
      "Slow, poorly optimized sites",
      "Dated design, not luxury-ready",
      "Fixed manual pricing",
      "No mobile version",
      "Expensive maintenance",
    ],
    afterItems: [
      "Performance 95+/100",
      "Premium luxury design",
      "Dynamic multi-season pricing",
      "Perfect responsiveness",
      "Maintenance included",
    ],
  },
}

export function BeforeAfterSlider() {
  const { language } = useLanguage()
  const content = t[language]
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const x = useMotionValue(0)

  const handleDrag = (_: unknown, info: PanInfo) => {
    if (!containerRef.current) return
    const containerWidth = containerRef.current.offsetWidth
    const deltaPercent = (info.delta.x / containerWidth) * 100
    setSliderPosition((prev) => Math.max(10, Math.min(90, prev + deltaPercent)))
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const percent = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(10, Math.min(90, percent)))
  }

  return (
    <section className="py-28 px-6 lg:px-8 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <TextReveal
            as="h2"
            className="font-serif text-4xl lg:text-5xl font-medium mb-6 tracking-tight"
          >
            {content.title}
          </TextReveal>
          <FadeIn delay={200}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{content.subtitle}</p>
            <div className="luxury-divider mt-8" />
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div
            ref={containerRef}
            className="relative rounded-sm overflow-hidden border border-border/50 cursor-col-resize select-none"
            onClick={handleClick}
            style={{ height: "500px" }}
          >
            {/* AFTER panel (full width, behind) */}
            <div className="absolute inset-0 bg-accent/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-md ml-auto mr-12">
                <Badge className="mb-6 bg-accent/10 text-accent border-accent/30">{content.after}</Badge>
                <ul className="space-y-4">
                  {content.afterItems.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                      >
                        <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span className="text-sm lg:text-base font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BEFORE panel (clipped) */}
            <div
              className="absolute inset-0 bg-destructive/5 p-8 lg:p-12 flex flex-col justify-center"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="max-w-md ml-12">
                <Badge variant="destructive" className="mb-6">{content.before}</Badge>
                <ul className="space-y-4">
                  {content.beforeItems.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm lg:text-base text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Slider handle */}
            <motion.div
              className="absolute top-0 bottom-0 z-10"
              style={{ left: `${sliderPosition}%`, x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              dragMomentum={false}
              onDrag={handleDrag}
            >
              <div className="absolute top-0 bottom-0 -translate-x-1/2 w-[2px] bg-accent shadow-[0_0_12px_var(--accent)]" />
              <motion.div
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/40 cursor-grab active:cursor-grabbing border-2 border-white/20"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(var(--accent), 0)",
                    "0 0 0 8px rgba(180, 150, 80, 0.15)",
                    "0 0 0 0 rgba(180, 150, 80, 0)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <svg className="w-5 h-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
