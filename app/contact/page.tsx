"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { FadeIn } from "@/components/animations"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "proprietaire",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)

    try {
      const form = e.target as HTMLFormElement
      const data = new FormData(form)
      data.append("form-name", "contact")

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })

      if (!response.ok) throw new Error("Erreur serveur")
      setIsSubmitted(true)
    } catch {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="pt-16 min-h-screen">
          <section className="py-32 px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif">
                  Demande envoyée !
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Merci pour votre intérêt. Nous vous recontacterons dans les 24 heures pour organiser votre démonstration personnalisée.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="/">Retour à l'accueil</a>
                </Button>
              </FadeIn>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">Contact</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-serif">
                Demander une démo
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Découvrez comment notre CMS peut transformer votre activité immobilière à Saint-Barthélemy.
                Remplissez le formulaire et nous vous recontacterons sous 24h.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <FadeIn>
                  <Card className="border-2">
                    <CardContent className="p-8">
                      <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                          <label>
                            Ne remplissez pas ce champ : <input name="bot-field" />
                          </label>
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                              Nom complet <span className="text-accent">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                              placeholder="Votre nom"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email <span className="text-accent">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                              placeholder="votre@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                              Téléphone
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                              placeholder="+590 690 00 00 00"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium mb-2">
                              Nom de votre agence / villa
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                              placeholder="Ex: Villa Paradis"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="type" className="block text-sm font-medium mb-2">
                            Vous êtes <span className="text-accent">*</span>
                          </label>
                          <select
                            id="type"
                            name="type"
                            required
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                          >
                            <option value="proprietaire">Propriétaire de villa</option>
                            <option value="agence">Agence immobilière</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Votre message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                            placeholder="Parlez-nous de votre projet, vos besoins, vos questions..."
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-pulse">Envoi en cours...</span>
                            </>
                          ) : (
                            <>
                              Envoyer ma demande
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>

                        {submitError && (
                          <p className="text-sm text-destructive text-center bg-destructive/10 py-3 px-4 rounded-lg">
                            Une erreur est survenue. Veuillez réessayer ou nous contacter directement à contact@saintbarth-villas.com
                          </p>
                        )}

                        <p className="text-sm text-muted-foreground text-center">
                          En soumettant ce formulaire, vous acceptez d&apos;être recontacté par notre équipe.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <FadeIn delay={200}>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6 font-serif">Informations de contact</h2>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <div className="font-medium">Email</div>
                            <a href="mailto:contact@saintbarth-villas.com" className="text-muted-foreground hover:text-accent transition-colors">
                              contact@saintbarth-villas.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <div className="font-medium">Téléphone</div>
                            <a href="tel:+590590278888" className="text-muted-foreground hover:text-accent transition-colors">
                              +590 590 27 88 88
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <div className="font-medium">Localisation</div>
                            <div className="text-muted-foreground">
                              Saint-Barthélemy, French West Indies
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <div className="font-medium">Réponse sous 24h</div>
                            <div className="text-muted-foreground">
                              Du lundi au vendredi
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-8">
                      <h3 className="font-bold mb-4">Ce qui vous attend</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Démonstration personnalisée de 30 min</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Analyse de vos besoins spécifiques</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Proposition sur-mesure sans engagement</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">Réponses à toutes vos questions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
