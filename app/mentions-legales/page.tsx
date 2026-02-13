import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Mentions légales | Saint-Barth Villas",
  description: "Mentions légales du site Saint-Barth Villas CMS.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-neutral">
            <h1 className="font-serif text-4xl font-medium tracking-tight mb-12">Mentions légales</h1>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Éditeur du site</h2>
            <p className="text-muted-foreground leading-relaxed">
              Saint-Barth Villas<br />
              Gustavia, 97133 Saint-Barthélemy<br />
              Antilles françaises<br />
              Email : contact@saintbarth-villas.com<br />
              Téléphone : +590 590 27 88 88
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Hébergement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, vidéos, logiciels) est la
              propriété exclusive de Saint-Barth Villas ou de ses partenaires. Toute reproduction, représentation,
              modification, publication ou adaptation de tout ou partie du site est interdite, sauf autorisation écrite
              préalable.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Saint-Barth Villas s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
              diffusées sur ce site, mais ne saurait être tenue responsable d&apos;erreurs, d&apos;omissions ou des
              résultats qui pourraient être obtenus par un mauvais usage de ces informations.
            </p>

            <h2 className="font-serif text-xl font-medium mt-10 mb-4">Crédits</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conception et développement : Saint-Barth Villas.<br />
              Photographies : droits réservés.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
