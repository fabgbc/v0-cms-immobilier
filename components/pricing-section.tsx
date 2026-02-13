"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, TextReveal } from "@/components/animations"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { scaleBlurIn, staggerContainer } from "@/lib/motion-variants"

const t = {
  fr: {
    badge: "Tarifs transparents",
    title: "Choisissez votre plan",
    subtitle: "Des solutions adaptées à chaque besoin, sans engagement",
    monthly: "Mensuel",
    yearly: "Annuel",
    yearlyDiscount: "-20%",
    perMonth: "/mois",
    perYear: "/an",
    cta: "Commencer",
    ctaHighlight: "Essai gratuit",
    popular: "Le plus populaire",
    plans: [
      {
        name: "Essentiel",
        desc: "Idéal pour un propriétaire avec une villa",
        monthlyPrice: 149,
        yearlyPrice: 1430,
        features: [
          { text: "1 propriété", included: true },
          { text: "Site web premium", included: true },
          { text: "SEO natif", included: true },
          { text: "Réservation en ligne", included: true },
          { text: "Support email", included: true },
          { text: "CRM intégré", included: false },
          { text: "Multi-propriétés", included: false },
          { text: "API & intégrations", included: false },
        ],
      },
      {
        name: "Professional",
        desc: "Pour les propriétaires exigeants et petites agences",
        monthlyPrice: 299,
        yearlyPrice: 2870,
        features: [
          { text: "Jusqu'à 10 propriétés", included: true },
          { text: "Site web premium", included: true },
          { text: "SEO natif + Google Ads", included: true },
          { text: "Réservation en ligne", included: true },
          { text: "Support prioritaire", included: true },
          { text: "CRM intégré", included: true },
          { text: "Tarification dynamique", included: true },
          { text: "API & intégrations", included: false },
        ],
      },
      {
        name: "Enterprise",
        desc: "Pour les agences avec un large portfolio",
        monthlyPrice: 499,
        yearlyPrice: 4790,
        features: [
          { text: "Propriétés illimitées", included: true },
          { text: "Site web premium", included: true },
          { text: "SEO natif + Google Ads", included: true },
          { text: "Réservation en ligne", included: true },
          { text: "Support dédié 24/7", included: true },
          { text: "CRM intégré", included: true },
          { text: "Tarification dynamique", included: true },
          { text: "API & intégrations", included: true },
        ],
      },
    ],
  },
  en: {
    badge: "Transparent pricing",
    title: "Choose your plan",
    subtitle: "Solutions tailored to every need, no commitment required",
    monthly: "Monthly",
    yearly: "Yearly",
    yearlyDiscount: "-20%",
    perMonth: "/month",
    perYear: "/year",
    cta: "Get started",
    ctaHighlight: "Free trial",
    popular: "Most popular",
    plans: [
      {
        name: "Essential",
        desc: "Ideal for a single villa owner",
        monthlyPrice: 149,
        yearlyPrice: 1430,
        features: [
          { text: "1 property", included: true },
          { text: "Premium website", included: true },
          { text: "Native SEO", included: true },
          { text: "Online booking", included: true },
          { text: "Email support", included: true },
          { text: "Integrated CRM", included: false },
          { text: "Multi-properties", included: false },
          { text: "API & integrations", included: false },
        ],
      },
      {
        name: "Professional",
        desc: "For demanding owners and small agencies",
        monthlyPrice: 299,
        yearlyPrice: 2870,
        features: [
          { text: "Up to 10 properties", included: true },
          { text: "Premium website", included: true },
          { text: "Native SEO + Google Ads", included: true },
          { text: "Online booking", included: true },
          { text: "Priority support", included: true },
          { text: "Integrated CRM", included: true },
          { text: "Dynamic pricing", included: true },
          { text: "API & integrations", included: false },
        ],
      },
      {
        name: "Enterprise",
        desc: "For agencies with a large portfolio",
        monthlyPrice: 499,
        yearlyPrice: 4790,
        features: [
          { text: "Unlimited properties", included: true },
          { text: "Premium website", included: true },
          { text: "Native SEO + Google Ads", included: true },
          { text: "Online booking", included: true },
          { text: "Dedicated 24/7 support", included: true },
          { text: "Integrated CRM", included: true },
          { text: "Dynamic pricing", included: true },
          { text: "API & integrations", included: true },
        ],
      },
    ],
  },
}

// Animated price display with roll effect
function AnimatedPrice({ value, prefix = "€" }: { value: number; prefix?: string }) {
  return (
    <span className="inline-flex items-baseline">
      <span>{prefix}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function PricingSection() {
  const { language } = useLanguage()
  const content = t[language]
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-6xl mx-auto">
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

        {/* Toggle Mensuel/Annuel */}
        <FadeIn delay={100} className="flex justify-center mb-10 sm:mb-14 lg:mb-16">
          <div className="relative flex items-center bg-secondary rounded-sm p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "relative z-10 px-4 sm:px-6 py-2.5 text-sm font-medium rounded-sm transition-colors min-h-[44px]",
                !isYearly ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {content.monthly}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "relative z-10 px-4 sm:px-6 py-2.5 text-sm font-medium rounded-sm transition-colors min-h-[44px]",
                isYearly ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {content.yearly}
              <motion.span
                className="ml-1.5 sm:ml-2 text-xs font-bold text-accent inline-block"
                animate={{ scale: isYearly ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {content.yearlyDiscount}
              </motion.span>
            </button>
            {/* Animated pill */}
            <motion.div
              className="absolute top-1 bottom-1 bg-accent rounded-sm"
              layout
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{
                left: isYearly ? "50%" : "4px",
                width: "calc(50% - 4px)",
              }}
            />
          </div>
        </FadeIn>

        {/* Pricing cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {content.plans.map((plan, i) => {
            const isHighlighted = i === 1

            return (
              <motion.div
                key={plan.name}
                variants={scaleBlurIn}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                <Card className={cn(
                  "border rounded-sm h-full relative overflow-hidden transition-all duration-500",
                  isHighlighted
                    ? "border-accent shadow-xl shadow-accent/10 scale-[1.02]"
                    : "border-border/50 hover:border-accent/30 card-glow"
                )}>
                  {isHighlighted && (
                    <motion.div
                      className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-dark via-accent to-gold-light"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                  <CardContent className="p-5 sm:p-6 lg:p-8">
                    {isHighlighted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Badge variant="luxury" className="mb-3 sm:mb-4">{content.popular}</Badge>
                      </motion.div>
                    )}
                    <h3 className="font-serif text-xl sm:text-2xl font-medium mb-1.5 sm:mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">{plan.desc}</p>

                    <div className="mb-6 sm:mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium">
                          <AnimatedPrice value={isYearly ? plan.yearlyPrice : plan.monthlyPrice} />
                        </span>
                        <span className="text-muted-foreground text-xs sm:text-sm">
                          {isYearly ? content.perYear : content.perMonth}
                        </span>
                      </div>
                      <AnimatePresence>
                        {isYearly && (
                          <motion.p
                            className="text-sm text-accent mt-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {language === "fr" ? `soit €${Math.round(plan.yearlyPrice / 12)}/mois` : `i.e. €${Math.round(plan.yearlyPrice / 12)}/month`}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <Button
                      variant={isHighlighted ? "luxury" : "outline"}
                      size="lg"
                      className={cn("w-full mb-6 sm:mb-8 group h-12 sm:h-auto", isHighlighted && "hover-glow")}
                      asChild
                    >
                      <Link href="/contact">
                        {isHighlighted ? content.ctaHighlight : content.cta}
                      </Link>
                    </Button>

                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 + j * 0.04, duration: 0.3 }}
                          className="flex items-center gap-3"
                        >
                          {feature.included ? (
                            <motion.div
                              whileInView={{ scale: [0, 1.2, 1] }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.08 + j * 0.04 + 0.1, duration: 0.3 }}
                            >
                              <Check className="h-4 w-4 text-accent shrink-0" />
                            </motion.div>
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                          )}
                          <span className={cn(
                            "text-sm",
                            feature.included ? "text-foreground" : "text-muted-foreground/50"
                          )}>
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
