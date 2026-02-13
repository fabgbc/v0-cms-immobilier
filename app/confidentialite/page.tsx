import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Politique de confidentialité | Saint-Barth Villas",
  description: "Politique de confidentialité et protection des données personnelles de Saint-Barth Villas.",
}

export default function ConfidentialitePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <h1 className="font-serif text-4xl font-medium tracking-tight mb-12">Politique de confidentialité</h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Dernière mise à jour : février 2026
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Collecte des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous collectons les informations que vous nous fournissez volontairement via notre formulaire de contact :
              nom, adresse email, numéro de téléphone, nom de votre agence ou villa, et le contenu de votre message.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Utilisation des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vos données sont utilisées uniquement pour répondre à vos demandes de démonstration et vous fournir des
              informations sur nos services. Elles ne sont jamais vendues, louées ou partagées avec des tiers à des fins
              commerciales.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Conservation des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de votre dernière
              interaction avec nos services, conformément à la réglementation en vigueur.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Vos droits</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits
              suivants sur vos données personnelles :
            </p>
            <ul className="text-muted-foreground leading-relaxed space-y-2 mt-4 list-disc pl-6">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous à : contact@pandhiweb.com
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site utilise uniquement des cookies strictement nécessaires à son fonctionnement. Aucun cookie
              publicitaire ou de suivi n&apos;est utilisé.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pour toute question relative à la protection de vos données, contactez-nous :<br />
              Email : contact@pandhiweb.com<br />
              Adresse : Gustavia, 97133 Saint-Barthélemy, Antilles françaises
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
