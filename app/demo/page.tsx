"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CmsDemo } from "@/components/cms-demo"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const t = {
  fr: {
    badge: "Démo interactive",
    title: "Testez notre CMS en temps réel",
    subtitle: "Modifiez les champs à gauche et observez le résultat instantanément à droite. C'est aussi simple que ça.",
    ctaTitle: "Convaincu ?",
    ctaSubtitle: "Lancez-vous dès maintenant et créez le site de votre villa en quelques jours",
    ctaButton: "Demander une démo personnalisée",
  },
  en: {
    badge: "Interactive Demo",
    title: "Test our CMS in real time",
    subtitle: "Edit the fields on the left and see the result instantly on the right. It's that simple.",
    ctaTitle: "Convinced?",
    ctaSubtitle: "Get started now and create your villa's website in just a few days",
    ctaButton: "Request a personalized demo",
  },
}

export default function DemoPage() {
  const { language } = useLanguage()
  const content = t[language]

  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-12 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-12">
              <Badge variant="luxury" className="mb-6">
                <Play className="w-3.5 h-3.5 mr-1.5 fill-accent text-accent" />
                {content.badge}
              </Badge>
              <h1 className="font-serif text-4xl lg:text-6xl font-medium mb-6 tracking-tight">{content.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{content.subtitle}</p>
            </FadeIn>
          </div>
        </section>

        {/* Demo */}
        <section className="px-6 lg:px-8 pb-28">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={200}>
              <CmsDemo />
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent)_0%,transparent_50%)] opacity-10" />
          <FadeIn className="max-w-4xl mx-auto text-center relative">
            <div className="luxury-divider mb-8" />
            <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-6 tracking-tight">{content.ctaTitle}</h2>
            <p className="text-xl mb-10 text-primary-foreground/80">{content.ctaSubtitle}</p>
            <Button size="xl" variant="luxury" className="text-lg" asChild>
              <Link href="/contact">
                {content.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </>
  )
}
