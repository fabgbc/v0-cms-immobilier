import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Globe,
  Home,
  DollarSign,
  Search,
  FileText,
  MessageSquare,
  Server,
  Zap,
  Lock,
  Shield,
  Database,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fonctionnalités | CMS Immobilier Complet",
  description:
    "Découvrez toutes les fonctionnalités du CMS : SEO natif, tarification dynamique, gestion des villas, moteur de recherche, messagerie centralisée, maintenance incluse.",
  openGraph: {
    title: "Fonctionnalités | Saint-Barth Villas CMS",
    description:
      "CMS immobilier complet : SEO, tarification dynamique, gestion des villas, IA, maintenance incluse.",
  },
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn } from "@/components/animations"

export default function FeaturesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-balance font-serif">
                  Fonctionnalités du CMS
                </h1>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                  Tout ce qu'il faut pour un site premium + une gestion simple, déjà intégré.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="max-w-3xl mx-auto bg-accent/5 border border-accent/20 rounded-2xl p-8 mt-12">
                  <h2 className="text-2xl font-bold mb-4">
                    Un CMS qui vous fait gagner 15h par semaine et 40% de demandes en plus
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Chaque fonctionnalité a été pensée pour réduire votre charge de travail tout en maximisant vos
                    conversions. Découvrez comment chaque élément transforme concrètement votre activité.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Fonctionnalités principales */}
        <section className="py-20 px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight font-serif">Nos principales fonctionnalités</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Des fonctionnalités puissantes et intuitives pour gérer votre activité immobilière efficacement.
                </p>
              </div>
            </FadeIn>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="visibility" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Visibilité & Référencement</h3>
                      <p className="text-muted-foreground text-sm">
                        IA rédaction, zones SEO préconfigurées, traductions multilingues, performance ultra-rapide
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    Notre CMS est bâti sur une architecture technique de pointe qui place le{" "}
                    <strong>référencement naturel au cœur de sa conception</strong>. Contrairement aux solutions
                    traditionnelles, nous utilisons <strong>Next.js 16 avec rendu côté serveur (SSR)</strong>, ce qui
                    signifie que chaque page est déjà complètement construite quand Google la visite - un avantage
                    énorme pour votre classement.
                  </p>
                  <p className="mb-4">
                    Techniquement, votre site bénéficie d'un <strong>temps de chargement ultra-rapide</strong> (moins de
                    1 seconde) grâce à l'optimisation automatique des images, la mise en cache intelligente et le code
                    minifié. Les moteurs de recherche adorent la vitesse, et cela se traduit directement par un meilleur
                    positionnement.
                  </p>
                  <p>
                    Côté pratique, vous avez accès à des <strong>zones SEO préconfigurées</strong> pour chaque villa
                    (titre, description, mots-clés) sans avoir besoin de connaissances techniques. Notre IA vous aide
                    même à rédiger des descriptions optimisées qui plaisent autant à Google qu'à vos futurs clients.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="visibility-en" className="border-2 rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Visibility & SEO (English)</h3>
                      <p className="text-muted-foreground text-sm">
                        AI writing, preconfigured SEO zones, multilingual translations, ultra-fast performance
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    Our CMS is built on a cutting-edge technical architecture that places{" "}
                    <strong>natural referencing at the heart of its design</strong>. Unlike traditional solutions, we
                    use <strong>Next.js 16 with server-side rendering (SSR)</strong>, which means that every page is
                    already fully built when Google visits it - a huge advantage for your ranking.
                  </p>
                  <p className="mb-4">
                    Technically, your site benefits from <strong>ultra-fast loading times</strong> (less than 1 second)
                    thanks to automatic image optimization, intelligent caching and minified code. Search engines love
                    speed, and this translates directly into better positioning.
                  </p>
                  <p>
                    On the practical side, you have access to <strong>preconfigured SEO zones</strong> for each villa
                    (title, description, keywords) without needing technical knowledge. Our AI even helps you write
                    optimized descriptions that please both Google and your future clients.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="design" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Home className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Design & Expérience</h3>
                      <p className="text-muted-foreground text-sm">
                        Design premium, bibliothèque d'icônes, formulaires optimisés, connexion multi-canal
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    <strong>Trois options s'offrent à vous</strong>, selon votre situation et vos préférences :
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Choisir un thème premium</strong> : Nous avons une bibliothèque de designs modernes et
                      élégants, spécialement conçus pour la location de villas de luxe. Vous sélectionnez celui qui vous
                      plaît, et c'est prêt.
                    </li>
                    <li>
                      <strong>Créer un design de A à Z</strong> : Vous avez une vision précise ? Notre équipe de
                      designers travaille avec vous pour créer une identité visuelle unique qui reflète parfaitement
                      votre marque et vos valeurs.
                    </li>
                    <li>
                      <strong>Récupérer votre design existant</strong> : Vous avez déjà un site que vous aimez ? Nous
                      pouvons reprendre votre charte graphique, vos couleurs, votre logo et l'intégrer dans notre CMS
                      tout en améliorant l'expérience utilisateur.
                    </li>
                  </ul>
                  <p>
                    Dans tous les cas, le processus est <strong>simple et rapide</strong>. Vous validez les maquettes,
                    et nous nous occupons de l'intégration technique. Tout est possible et surtout, tout est facilement
                    modifiable par la suite.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="design-en" className="border-2 rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Home className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Design & Experience (English)</h3>
                      <p className="text-muted-foreground text-sm">
                        Premium design, icon library, optimized forms, multi-channel connection
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    <strong>Three options are available to you</strong>, depending on your situation and preferences:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Choose a premium theme</strong>: We have a library of modern and elegant designs,
                      specially created for luxury villa rentals. You select the one you like, and it's ready.
                    </li>
                    <li>
                      <strong>Create a design from A to Z</strong>: Do you have a specific vision? Our design team works
                      with you to create a unique visual identity that perfectly reflects your brand and values.
                    </li>
                    <li>
                      <strong>Retrieve your existing design</strong>: Already have a site you love? We can take your
                      graphic charter, colors, logo and integrate it into our CMS while improving the user experience.
                    </li>
                  </ul>
                  <p>
                    In all cases, the process is <strong>simple and fast</strong>. You validate the mockups, and we take
                    care of the technical integration. Everything is possible and above all, everything is easily
                    modifiable afterwards.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="villas" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Gestion des Villas</h3>
                      <p className="text-muted-foreground text-sm">
                        Import rapide, pages premium, carte interactive, SEO par villa
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    Nous avons développé une <strong>interface d'administration intuitive</strong>, spécialement pensée
                    pour le marché de Saint-Barthélemy. Chaque champ est exactement là où vous vous attendez à le
                    trouver : photos, description, équipements, localisation, tarifs...
                  </p>
                  <p className="mb-4">
                    L'interface est organisée par <strong>onglets clairs</strong> : Informations générales, Photos &
                    Médias, Équipements & Services, Localisation, Tarifs & Disponibilités. Vous ne vous perdez jamais
                    dans des menus complexes. Tout est accessible en quelques clics.
                  </p>
                  <p>
                    Besoin de modifier rapidement une information ? Un clic sur la villa dans votre liste, vous modifiez
                    ce que vous voulez (ajout de photos, changement de description, mise à jour des équipements), et
                    c'est instantanément en ligne. <strong>Simple, rapide, efficace</strong>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="villas-en" className="border-2 rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Villa Management (English)</h3>
                      <p className="text-muted-foreground text-sm">
                        Quick import, premium pages, interactive map, SEO per villa
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    We have developed an <strong>intuitive administration interface</strong>, specially designed for the
                    Saint-Barthélemy market. Every field is exactly where you expect to find it: photos, description,
                    amenities, location, rates...
                  </p>
                  <p className="mb-4">
                    The interface is organized by <strong>clear tabs</strong>: General Information, Photos & Media,
                    Amenities & Services, Location, Rates & Availability. You never get lost in complex menus.
                    Everything is accessible with just a few clicks.
                  </p>
                  <p>
                    Need to quickly modify information? One click on the villa in your list, you modify what you want
                    (add photos, change description, update amenities), and it's instantly online.{" "}
                    <strong>Simple, fast, efficient</strong>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Prix & Saisons</h3>
                      <p className="text-muted-foreground text-sm">
                        Prix dynamiques par chambre, calcul multi-saisons, saisons préconfigurées, duplication annuelle
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    Avec <strong>notre expérience de Saint-Barth</strong>, nous avons créé un système de gestion des
                    prix qui correspond exactement aux besoins du marché local. Vous définissez vos saisons (Haute,
                    Moyenne, Basse, Très Haute pour les fêtes de fin d'année), et vous indiquez le tarif pour chaque
                    type de chambre.
                  </p>
                  <p className="mb-4">
                    L'interface est <strong>visuelle et intuitive</strong> : un calendrier coloré vous montre
                    immédiatement quelle saison s'applique à quelle période. Besoin d'ajouter une exception pour une
                    semaine spéciale ? C'est fait en 30 secondes.
                  </p>
                  <p>
                    Et le meilleur ? Quand une nouvelle année arrive, vous{" "}
                    <strong>dupliquez l'année précédente en un clic</strong>, ajustez les quelques changements
                    nécessaires, et c'est prêt. Plus besoin de tout ressaisir manuellement. Vous gagnez des heures de
                    travail.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-en" className="border-2 rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Pricing & Seasons (English)</h3>
                      <p className="text-muted-foreground text-sm">
                        Dynamic room pricing, multi-season calculation, preconfigured seasons, annual duplication
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    With <strong>our experience of Saint-Barth</strong>, we have created a pricing management system
                    that exactly matches the needs of the local market. You define your seasons (High, Medium, Low, Very
                    High for the end-of-year holidays), and you indicate the rate for each room type.
                  </p>
                  <p className="mb-4">
                    The interface is <strong>visual and intuitive</strong>: a colored calendar immediately shows you
                    which season applies to which period. Need to add an exception for a special week? It's done in 30
                    seconds.
                  </p>
                  <p>
                    And the best part? When a new year arrives, you{" "}
                    <strong>duplicate the previous year with one click</strong>, adjust the few necessary changes, and
                    it's ready. No more need to manually re-enter everything. You save hours of work.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="search" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Moteur de Recherche</h3>
                      <p className="text-muted-foreground text-sm">
                        Filtres multiples combinables, catégories personnalisées illimitées
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    <strong>Pour les agences avec de nombreuses villas</strong>, le classement est crucial. Notre
                    système vous permet de créer autant de catégories que nécessaire : par quartier (Gustavia, Lorient,
                    Gouverneur...), par capacité, par budget, par style (contemporain, créole, pieds dans l'eau...).
                  </p>
                  <p className="mb-4">
                    En <strong>back-office</strong>, vous retrouvez n'importe quelle villa en quelques secondes grâce à
                    la recherche par nom, référence, ou filtres. Besoin de toutes les villas de Gustavia avec piscine et
                    vue mer ? Deux clics et vous avez la liste.
                  </p>
                  <p>
                    Côté <strong>visiteurs</strong>, le moteur de recherche est encore plus puissant : ils peuvent
                    combiner plusieurs critères (nombre de chambres + vue mer + proximité plage + piscine chauffée) et
                    obtenir exactement les villas qui correspondent. Plus les recherches sont précises, plus vos clients
                    sont qualifiés et prêts à réserver.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="search-en" className="border-2 rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Search Engine (English)</h3>
                      <p className="text-muted-foreground text-sm">
                        Multiple combinable filters, unlimited custom categories
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    <strong>For agencies with many villas</strong>, classification is crucial. Our system allows you to
                    create as many categories as needed: by neighborhood (Gustavia, Lorient, Gouverneur...), by
                    capacity, by budget, by style (contemporary, Creole, waterfront...).
                  </p>
                  <p className="mb-4">
                    In the <strong>back-office</strong>, you find any villa in seconds thanks to search by name,
                    reference, or filters. Need all villas in Gustavia with pool and sea view? Two clicks and you have
                    the list.
                  </p>
                  <p>
                    For <strong>visitors</strong>, the search engine is even more powerful: they can combine multiple
                    criteria (number of bedrooms + sea view + beach proximity + heated pool) and get exactly the villas
                    that match. The more precise the searches, the more qualified your customers are and ready to book.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pages" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Pages Essentielles</h3>
                      <p className="text-muted-foreground text-sm">
                        Homepage dynamique, page conciergerie SEO, FAQ personnalisée
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    Un site de location de villas a besoin de <strong>pages stratégiques bien pensées</strong> : page
                    d'accueil engageante, présentation de l'agence ou du propriétaire, services de conciergerie,
                    conditions générales, FAQ, contact...
                  </p>
                  <p className="mb-4">
                    Notre CMS inclut des <strong>templates pré-construits pour toutes ces pages</strong>. Vous n'avez
                    plus qu'à personnaliser les textes avec votre propre contenu. Et si vous avez besoin d'aide pour la
                    rédaction, nous vous accompagnons : nous connaissons les bonnes pratiques, les informations à mettre
                    en avant, et comment optimiser pour le SEO.
                  </p>
                  <p>
                    Créer et mettre en ligne une nouvelle page prend <strong>moins de 10 minutes</strong>. Vous éditez
                    le contenu dans un éditeur visuel simple (comme Word), vous prévisualisez, et vous publiez. C'est
                    aussi simple que ça.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pages-en" className="border-2 rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Essential Pages (English)</h3>
                      <p className="text-muted-foreground text-sm">
                        Dynamic homepage, SEO concierge page, personalized FAQ
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    A villa rental site needs <strong>well-thought-out strategic pages</strong>: engaging homepage,
                    agency or owner presentation, concierge services, terms and conditions, FAQ, contact...
                  </p>
                  <p className="mb-4">
                    Our CMS includes <strong>pre-built templates for all these pages</strong>. You just need to
                    customize the texts with your own content. And if you need help with writing, we guide you: we know
                    the best practices, the information to highlight, and how to optimize for SEO.
                  </p>
                  <p>
                    Creating and publishing a new page takes <strong>less than 10 minutes</strong>. You edit the content
                    in a simple visual editor (like Word), you preview, and you publish. It's that simple.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="messaging" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Messagerie & Demandes</h3>
                      <p className="text-muted-foreground text-sm">
                        Dashboard centralisé, gestion par statuts, notifications multi-canal
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    Toutes vos demandes de réservation arrivent dans une <strong>interface unique et organisée</strong>.
                    Plus besoin de jongler entre les emails, les messages WhatsApp et les formulaires perdus. Tout est
                    centralisé au même endroit.
                  </p>
                  <p className="mb-4">
                    Vous recevez bien sûr des <strong>notifications par email</strong> pour chaque nouvelle demande,
                    mais vous avez aussi un tableau de bord qui vous donne une vue d'ensemble : demandes en attente, en
                    cours de traitement, confirmées, refusées. Chaque demande affiche un résumé clair : villa concernée,
                    dates, nombre de personnes, budget, message du client.
                  </p>
                  <p>
                    Traiter une demande est <strong>ultra-rapide</strong> : un clic pour voir les détails complets, un
                    clic pour changer le statut, un clic pour répondre au client. Vous pouvez même ajouter des notes
                    internes pour votre équipe. Tout est pensé pour vous faire gagner du temps.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="messaging-en" className="border-2 rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Messaging & Requests (English)</h3>
                      <p className="text-muted-foreground text-sm">
                        Centralized dashboard, status management, multi-channel notifications
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    All your booking requests arrive in a <strong>single, organized interface</strong>. No more juggling
                    between emails, WhatsApp messages and lost forms. Everything is centralized in the same place.
                  </p>
                  <p className="mb-4">
                    You of course receive <strong>email notifications</strong> for each new request, but you also have a
                    dashboard that gives you an overview: pending requests, in progress, confirmed, refused. Each
                    request displays a clear summary: villa concerned, dates, number of people, budget, customer
                    message.
                  </p>
                  <p>
                    Processing a request is <strong>ultra-fast</strong>: one click to see full details, one click to
                    change status, one click to respond to the customer. You can even add internal notes for your team.
                    Everything is designed to save you time.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="maintenance" className="border-2 rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Server className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Maintenance Technique</h3>
                      <p className="text-muted-foreground text-sm">
                        Hébergement premium, mises à jour automatiques, monitoring 24/7, support réactif
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    Vous n'avez <strong>jamais à vous soucier de la technique</strong>. Nous gérons l'hébergement, les
                    sauvegardes, les mises à jour de sécurité, la performance des serveurs. Tout fonctionne en
                    arrière-plan, automatiquement.
                  </p>
                  <p className="mb-4">
                    Notre équipe est <strong>très disponible</strong> pour chaque client. Un problème ? Une question ?
                    Besoin d'aide pour modifier quelque chose ? Nous répondons rapidement par email, téléphone ou chat.
                    Nous connaissons votre site par cœur et nous pouvons intervenir immédiatement.
                  </p>
                  <p>
                    Et surtout, nous <strong>continuons à faire évoluer le CMS</strong>. Régulièrement, nous ajoutons de
                    nouvelles fonctionnalités, nous améliorons les performances, nous intégrons les dernières
                    innovations. Tous nos clients en bénéficient automatiquement, sans surcoût. Votre site progresse
                    avec le temps, et votre activité aussi.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="maintenance-en" className="border-2 rounded-lg px-6 bg-muted/30">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Server className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">Technical Maintenance (English)</h3>
                      <p className="text-muted-foreground text-sm">
                        Premium hosting, automatic updates, 24/7 monitoring, responsive support
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base">
                  <p className="mb-4">
                    You <strong>never have to worry about technical issues</strong>. We manage hosting, backups,
                    security updates, server performance. Everything works in the background, automatically.
                  </p>
                  <p className="mb-4">
                    Our team is <strong>very available</strong> for every customer. A problem? A question? Need help
                    modifying something? We respond quickly by email, phone or chat. We know your site by heart and we
                    can intervene immediately.
                  </p>
                  <p>
                    And most importantly, we <strong>continue to evolve the CMS</strong>. Regularly, we add new
                    features, improve performance, integrate the latest innovations. All our customers benefit
                    automatically, at no extra cost. Your site progresses over time, and so does your business.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-16">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact">
                  Démarrer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Sécurité & Performance</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Infrastructure professionnelle pour que votre site soit toujours rapide, sécurisé, et disponible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Chiffrement SSL</h3>
                  <p className="text-sm text-muted-foreground">
                    Données chiffrées de bout en bout pour la sécurité de vos clients
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Backup quotidien</h3>
                  <p className="text-sm text-muted-foreground">
                    Sauvegarde automatique de toutes vos données chaque jour
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">99.9% uptime</h3>
                  <p className="text-sm text-muted-foreground">Haute disponibilité garantie pour vos visiteurs</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">RGPD compliant</h3>
                  <p className="text-sm text-muted-foreground">Conformité totale aux réglementations européennes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Questions fréquentes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tout ce que vous devez savoir avant de vous lancer, selon votre profil.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-accent">Pour les agences immobilières</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="faq-agency-1" className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Combien de temps pour mettre en ligne mon catalogue complet ?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong className="text-foreground">21 jours maximum.</strong> Nous importons vos données
                      existantes, configurons votre design sur-mesure, et vous formons à l'outil.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-agency-2" className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Est-ce que je garde mes URLs actuelles pour le SEO ?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong className="text-foreground">Oui, à 100%.</strong> Nous mettons en place toutes les
                      redirections 301 nécessaires. Votre historique SEO est préservé.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-agency-3" className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Puis-je personnaliser le design à 100% ?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong className="text-foreground">Oui, sans limite.</strong> Vous contrôlez les couleurs,
                      polices, mise en page, structure des fiches villas.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-accent">Pour les propriétaires</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="faq-owner-1" className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Je ne suis pas technique, est-ce vraiment facile à utiliser ?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong className="text-foreground">Aussi simple qu'utiliser Airbnb.</strong> Interface intuitive
                      en français, pas de code, modifications en temps réel.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-owner-2" className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Combien de temps pour mettre ma villa en ligne ?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong className="text-foreground">2 heures maximum.</strong> Vous uploadez vos photos,
                      remplissez les infos et c'est en ligne.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-owner-3" className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Est-ce que j'aurai vraiment plus de demandes qu'avec les OTAs ?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong className="text-foreground">+40% de demandes en moyenne.</strong> Votre site apparaît sur
                      Google sans commission.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Découvrez nos autres solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des outils complémentaires pour optimiser votre activité immobilière
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl rounded-2xl overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Database className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">CRM Immobilier</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Gérez tous vos contacts, leads et clients depuis un tableau de bord unique. Suivez chaque demande,
                    automatisez vos relances et ne perdez plus aucune opportunité.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  >
                    <Link href="/crm">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl rounded-2xl overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <FileText className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Guestbook Numérique</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Offrez à vos clients une expérience premium avec un livret d'accueil digital personnalisé.
                    Informations pratiques, recommandations locales et services à portée de main.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  >
                    <Link href="/guestbook">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl rounded-2xl overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <ArrowRight className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Obtenez plus de réservations</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Découvrez nos conseils et stratégies pour maximiser vos réservations. Optimisation SEO, marketing
                    digital et meilleures pratiques pour booster votre activité.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  >
                    <Link href="/blog">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
