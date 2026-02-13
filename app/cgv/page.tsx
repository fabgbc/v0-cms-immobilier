import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Saint-Barth Villas",
  description: "Conditions générales de vente et d'utilisation du CMS Saint-Barth Villas.",
}

export default function CGVPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <h1 className="font-serif text-4xl font-medium tracking-tight mb-12">Conditions Générales de Vente</h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Dernière mise à jour : février 2026
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Article 1 — Objet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes Conditions Générales de Vente régissent les relations contractuelles entre Saint-Barth Villas
              et ses clients dans le cadre de la fourniture de services de création et d&apos;hébergement de sites
              internet via le CMS immobilier Saint-Barth Villas.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Article 2 — Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Saint-Barth Villas propose un service de CMS immobilier comprenant : la mise à disposition d&apos;une
              plateforme de gestion de contenu, l&apos;hébergement du site web, la maintenance technique, les mises à
              jour de sécurité et de fonctionnalités, ainsi que le support technique par email.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Article 3 — Abonnement et tarification</h2>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;accès au CMS est soumis à un abonnement mensuel ou annuel. Les tarifs en vigueur sont disponibles
              sur le site. Saint-Barth Villas se réserve le droit de modifier ses tarifs, avec un préavis de 30 jours
              pour les abonnements en cours.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Article 4 — Paiement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le paiement est dû à chaque début de période d&apos;abonnement. Les moyens de paiement acceptés sont la
              carte bancaire et le virement bancaire. Tout retard de paiement pourra entraîner la suspension de
              l&apos;accès au service.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Article 5 — Résiliation</h2>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;abonnement est sans engagement de durée minimale. Le client peut résilier à tout moment. La
              résiliation prend effet à la fin de la période d&apos;abonnement en cours. Aucun remboursement prorata
              n&apos;est effectué pour la période restante.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Article 6 — Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le CMS, son code source, son architecture et ses fonctionnalités restent la propriété exclusive de
              Saint-Barth Villas. Le client conserve la propriété de l&apos;ensemble de ses contenus (textes, photos,
              données) et peut les récupérer à tout moment.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Article 7 — Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Saint-Barth Villas s&apos;engage à assurer la disponibilité du service avec un taux de disponibilité
              de 99,9%. En cas d&apos;interruption planifiée pour maintenance, le client sera prévenu au moins 48 heures
              à l&apos;avance. Saint-Barth Villas ne saurait être tenue responsable des dommages indirects résultant de
              l&apos;utilisation du service.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Article 8 — Droit applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties s&apos;engagent à
              rechercher une solution amiable avant toute action judiciaire. À défaut d&apos;accord, les tribunaux
              compétents seront ceux du ressort de Basse-Terre, Guadeloupe.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
