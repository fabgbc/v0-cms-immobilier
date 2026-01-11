"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Home, Star, HelpCircle } from "lucide-react"
import { useState } from "react"
import { FadeIn } from "@/components/animations"

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"most-asked" | "general" | "owners" | "agencies">("most-asked")

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-serif">Questions fréquentes</h1>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Toutes les réponses aux questions que vous vous posez sur notre CMS immobilier. Si vous ne trouvez pas
                votre réponse, contactez-nous.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Tabs */}
        <section className="border-b border-border sticky top-16 bg-background z-40">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab("most-asked")}
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap font-medium transition-colors border-b-2 ${
                  activeTab === "most-asked"
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Star className="w-4 h-4" />
                Questions les plus posées
              </button>
              <button
                onClick={() => setActiveTab("general")}
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap font-medium transition-colors border-b-2 ${
                  activeTab === "general"
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                Générale
              </button>
              <button
                onClick={() => setActiveTab("owners")}
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap font-medium transition-colors border-b-2 ${
                  activeTab === "owners"
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Home className="w-4 h-4" />
                Propriétaire
              </button>
              <button
                onClick={() => setActiveTab("agencies")}
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap font-medium transition-colors border-b-2 ${
                  activeTab === "agencies"
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Building2 className="w-4 h-4" />
                Agence immobilière
              </button>
            </div>
          </div>
        </section>

        {/* Questions les plus posées */}
        {activeTab === "most-asked" && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="most-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Êtes-vous à SBH ou en France ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <div class="pt-0 pb-4 text-muted-foreground leading-relaxed">
                      Je vis à St Barth depuis 9 ans et, depuis 5 ans, j'ai réalisé plus de 150 sites internet pour des
                      entreprises locales, des agences immobilières et des propriétaires d'hébergements.&nbsp;
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="most-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Quelle technologie utilisez-vous ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Nous avons développé notre propre CMS en Node.js. À force de créer des sites internet pour des
                    agences immobilières et des propriétaires, nous avons pris la décision de concevoir notre propre
                    outil de développement, spécifiquement adapté au marché immobilier de St Barth. Chaque client
                    s'appuie sur une base technique commune, puis bénéficie d'un design entièrement personnalisé. Le
                    moteur reste le même, ce qui nous permet d'être beaucoup plus efficaces, tout en faisant évoluer
                    notre CMS chaque mois avec de nouvelles fonctionnalités.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="most-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Quelle part d'IA utilisez-vous pour le développement ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Nous n'avons pas utilisé l'IA pour le développement de notre CMS. Pour des projets aussi avancés et
                    structurants, l'IA peut parfois être approximative, ce qui ne permet pas toujours un contrôle total
                    du résultat. Nous utilisons l'IA pour certains projets, mais uniquement pour des sites vitrines à ce
                    stade. Nos clients — notamment les propriétaires — ont des besoins très précis. Nous privilégions
                    donc un développement manuel, afin de respecter scrupuleusement chaque étape et chaque workflow.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="most-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    J'ai déjà un nom de domaine et une adresse e-mail configurés.
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Parfait. Il suffira simplement de nous donner l'accès au nom de domaine afin que nous puissions le
                    connecter à votre site. Il en sera de même pour les adresses e-mail, notamment pour recevoir les
                    notifications liées aux demandes de réservation via le formulaire ou la page de contact.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="most-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Nous souhaiterions ajouter certaines fonctionnalités et en supprimer d'autres : comment
                    facturez-vous les modifications ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Pour la suppression de fonctionnalités existantes, aucun coût supplémentaire n'est facturé. En
                    revanche, pour l'ajout de fonctionnalités personnalisées, un devis spécifique sera établi. Nous
                    sommes toutefois très transparents : nous vous présenterons une estimation claire avant de débuter
                    tout développement. Par ailleurs, notre CMS évolue mensuellement avec de nouvelles fonctionnalités.
                    Souvent, les besoins de nos clients rejoignent les améliorations que nous envisagions déjà. Dans ce
                    cas, nous ne facturons rien, car ces ajouts bénéficient à l'ensemble de nos clients et enrichissent
                    le produit global.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="most-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Avez-vous quelqu'un qui pourrait rédiger les textes pour notre site ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Nous n'avons pas de rédacteur dans notre équipe. En revanche, nous avons formé des IA spécifiquement
                    sur vos propriétés et votre ton de communication, afin qu'elles puissent générer un contenu
                    personnalisé, pertinent et cohérent avec votre image de marque. Cela nous permet de proposer des
                    textes de qualité, rapidement et sans coût supplémentaire pour la rédaction.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="most-7" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Je suis développeur : pourquoi ne pas créer mon propre CMS sur mesure ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p className="mb-4">
                      C'est une excellente question, surtout si vous avez les compétences techniques pour le faire.
                      Cependant, voici ce que représente réellement le développement et la maintenance d'un CMS
                      immobilier sur mesure :
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>
                        <strong>Temps de développement :</strong> Concevoir un CMS complet (gestion des villas, tarifs
                        dynamiques, moteur de recherche, SEO, formulaires, backoffice, etc.) demande plusieurs centaines
                        d'heures. Si vous valorisez votre temps à 50-100€/h, le coût grimpe vite à 20 000-50 000€.
                      </li>
                      <li>
                        <strong>Maintenance continue :</strong> Un site ne se construit pas une fois pour toutes. Il
                        faut gérer les mises à jour de sécurité, les bugs, les évolutions du SEO, les nouvelles
                        fonctionnalités demandées par le marché. Cela représente plusieurs heures par mois.
                      </li>
                      <li>
                        <strong>Évolution métier :</strong> Notre CMS évolue tous les mois avec de nouvelles
                        fonctionnalités (synchronisation calendriers, analytics avancés, outils d'optimisation SEO,
                        etc.). En solo, vous devrez tout développer vous-même au fil de vos besoins.
                      </li>
                      <li>
                        <strong>Focus métier :</strong> Votre temps est peut-être mieux investi à gérer vos locations,
                        acquérir de nouveaux clients, optimiser votre taux d'occupation... plutôt qu'à maintenir une
                        infrastructure technique.
                      </li>
                    </ul>
                    <p className="mt-4">
                      Notre CMS vous offre une plateforme éprouvée, maintenue, sécurisée, et en constante évolution pour
                      une fraction du coût et du temps nécessaires à un développement sur mesure. C'est un choix
                      pragmatique : vous gardez le contrôle de votre présence en ligne (comme avec un CMS maison), sans
                      le fardeau technique.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        )}

        {/* Générale */}
        {activeTab === "general" && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="general-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Comment fonctionne l'abonnement ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    L'abonnement est mensuel et sans engagement long terme. Vous pouvez annuler à tout moment. Il inclut
                    le CMS complet, l'hébergement haute performance, les mises à jour de sécurité, les nouvelles
                    fonctionnalités et le support technique par email.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Quels moyens de paiement acceptez-vous ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Nous acceptons les paiements par carte bancaire et virement bancaire. Le prélèvement est automatique
                    chaque mois pour simplifier la gestion.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Proposez-vous une période d'essai ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Nous proposons une démonstration personnalisée du CMS avant souscription. Cela vous permet de voir
                    concrètement comment fonctionne l'outil et de poser toutes vos questions avant de vous engager.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Puis-je personnaliser le design de mon site ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Absolument. Chaque site bénéficie d'un design entièrement personnalisé selon votre identité visuelle
                    (couleurs, typographies, mise en page). Nous créons un site unique qui vous ressemble, pas un
                    template générique.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Le site est-il optimisé pour mobile ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Oui, tous nos sites sont 100% responsive et optimisés pour tous les appareils (mobile, tablette,
                    desktop). Plus de 60% des recherches de locations se font sur mobile, c'est donc une priorité
                    absolue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="general-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Comment fonctionne le support technique ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Nous sommes disponibles par email pour toute question ou problème technique. Nous nous engageons à
                    répondre sous 24-48h maximum. Pour les problèmes urgents, nous intervenons en priorité.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        )}

        {/* Propriétaires */}
        {activeTab === "owners" && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="owner-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Ai-je vraiment besoin d'un site si je suis déjà sur Airbnb/Booking ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Les plateformes OTAs prennent 15 à 25% de commission sur chaque réservation. Avec votre propre site,
                    vous gardez 100% du revenu. Si vous générez ne serait-ce que 3-4 réservations directes par an, vous
                    avez déjà rentabilisé le coût du CMS. Au-delà, c'est du profit pur.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="owner-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Est-ce compliqué à utiliser ? Je ne suis pas technique.
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Le CMS est conçu pour être aussi simple qu'utiliser Airbnb. Vous ajoutez vos photos, remplissez une
                    description, indiquez vos tarifs et disponibilités. Tout se fait via une interface visuelle, sans
                    code. Nous vous accompagnons lors de la mise en place et restons disponibles par email si besoin.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="owner-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Comment les visiteurs me trouvent-ils sur Google ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Votre site est optimisé pour le référencement dès le premier jour. Quand quelqu'un cherche "villa St
                    Barth 4 chambres vue mer", votre propriété peut apparaître dans les résultats. Le CMS génère
                    automatiquement les éléments techniques nécessaires (sitemap, balises SEO, données structurées).
                    Contrairement à Airbnb où vous êtes noyé parmi des milliers d'annonces, ici vous êtes visible
                    directement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="owner-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Comment gérer les demandes et réservations ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Chaque demande arrive par email et dans votre espace CMS. Vous voyez les dates demandées, le nombre
                    de personnes, et les coordonnées du visiteur. Vous répondez directement et gérez la réservation
                    comme vous le souhaitez (paiement, contrat, etc.). Le CMS n'impose pas de système de paiement en
                    ligne si vous préférez gérer vous-même.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="owner-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Puis-je avoir plusieurs villas sur le même site ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Oui, vous pouvez ajouter autant de villas que vous voulez. Chacune a sa propre page, ses propres
                    photos, tarifs et disponibilités. Le visiteur peut comparer vos différentes propriétés et choisir
                    celle qui lui convient. C'est idéal si vous gérez un petit portefeuille de locations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="owner-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Quel est le coût et qu'est-ce qui est inclus ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    L'abonnement mensuel inclut : le site complet, l'hébergement, les mises à jour, le support par
                    email, et toutes les fonctionnalités (galeries photos, calendrier, formulaire de contact, SEO,
                    etc.). Aucun frais supplémentaire, aucune commission sur vos réservations. Comparez avec les 15-25%
                    que prennent les OTAs : une seule réservation directe par mois et vous êtes gagnant.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="owner-7" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Puis-je garder Airbnb/Booking en parallèle ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Absolument. Le site ne remplace pas les OTAs, il les complète. Vous gardez vos annonces
                    Airbnb/Booking pour capter leur audience, mais vous avez aussi votre propre canal direct sans
                    commission. Beaucoup de propriétaires utilisent les deux : les OTAs pour la visibilité, le site
                    propre pour les réservations directes et récurrentes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="owner-8" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Que se passe-t-il si je veux arrêter ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Aucun engagement sur le long terme. Vous pouvez annuler votre abonnement quand vous voulez. Nous
                    vous recommandons de tester au moins 6 mois pour laisser le temps au référencement de se mettre en
                    place et voir les premiers résultats, mais vous restez libre.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        )}

        {/* Agences */}
        {activeTab === "agencies" && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="agency-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Combien de temps faut-il pour mettre en ligne notre catalogue de villas ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Votre site peut être en ligne en 21 jours maximum. Le CMS est pré-configuré avec toutes les
                    fonctionnalités essentielles. Vous n'avez qu'à ajouter vos villas, photos et contenus. Nous vous
                    accompagnons pendant toute la phase de setup avec un support dédié.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Puis-je gérer plusieurs catalogues (vente + location) ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Oui, le CMS permet de créer des catégories illimitées. Vous pouvez séparer vente longue durée,
                    location courte durée, location saisonnière, projets neufs, etc. Chaque catégorie a ses propres
                    filtres et critères de recherche adaptés.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Comment fonctionne la gestion des tarifs par saison ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Vous définissez vos saisons (haute, moyenne, basse) avec des dates précises. Pour chaque villa, vous
                    indiquez le prix par nuit selon la saison et le nombre de chambres occupées. Le système calcule
                    automatiquement le tarif total en fonction des dates de recherche du visiteur. Plus besoin de
                    grilles tarifaires statiques.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Est-ce que mon équipe peut travailler à plusieurs sur le CMS ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Absolument. Le CMS inclut un système de gestion d'équipe avec rôles et permissions. Vous pouvez
                    créer des comptes pour vos commerciaux, assistants, photographes, etc. avec des accès limités selon
                    leurs besoins (ajout de villas, modification de tarifs, gestion des demandes, etc.).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Que se passe-t-il si j'ai besoin d'une fonctionnalité spécifique à mon activité ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Le CMS est conçu pour être flexible. Si vous avez un besoin métier particulier (intégration avec
                    votre logiciel de gestion, export vers des portails tiers, etc.), nous pouvons développer ces
                    fonctionnalités sur-mesure. Vous bénéficiez de la puissance d'une plateforme sur-mesure à une
                    fraction du coût.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Comment le SEO est-il géré pour nos villas ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Chaque villa dispose de champs SEO dédiés (title, description, mots-clés). Le CMS génère
                    automatiquement des URLs optimisées, des balises schema.org pour le rich snippet, un sitemap XML mis
                    à jour automatiquement, et des données structurées pour Google. Vous êtes visible sur "villa St
                    Barth + [critères]" dès le premier mois.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-7" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Quel est le coût mensuel et qu'est-ce qui est inclus ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    L'abonnement inclut : le CMS complet, l'hébergement haute performance, les mises à jour de sécurité
                    et nouvelles fonctionnalités, le support technique par email, et la maintenance du site. Pas de
                    frais cachés, pas de surcoût pour le trafic. Vous payez un forfait mensuel fixe, point.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-8" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Puis-je intégrer le CMS à mon site existant ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Le CMS est conçu comme une plateforme complète. Si vous avez déjà un site vitrine, nous pouvons
                    migrer votre design et votre contenu vers le CMS, ou créer un sous-domaine dédié (ex:
                    villas.votre-agence.com). L'objectif est de centraliser toute votre gestion au même endroit.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-9" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    J'ai déjà un site web pour mon agence, dois-je ajouter manuellement les villas ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Non, pas du tout. Nous pouvons télécharger toutes vos villas et les insérer automatiquement sur
                    votre nouveau site. Vous n'avez pas à ressaisir manuellement vos propriétés, nous gérons la
                    migration complète de votre catalogue existant.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="agency-10" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Mon site est bien classé sur Google, vais-je perdre mon classement en passant sur votre CMS ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Absolument pas. Nous réalisons toutes les redirections nécessaires pour que vos pages indexées le
                    restent. Et en plus, nous améliorons le contenu pour donner encore plus de boost à votre
                    référencement. Votre visibilité ne fera que s'améliorer avec notre CMS optimisé SEO.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight mb-4 font-serif">Vous avez d'autres questions ?</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Notre équipe est là pour répondre à toutes vos interrogations sur le CMS immobilier.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/agences-immobilieres">Solution Agences</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/proprietaires">Solution Propriétaires</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
