import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Demander une Démo",
  description:
    "Contactez-nous pour une démonstration personnalisée du CMS immobilier. Réponse sous 24h. Propriétaires et agences à Saint-Barthélemy.",
  openGraph: {
    title: "Demander une Démo | Saint-Barth Villas CMS",
    description:
      "Demandez une démonstration personnalisée du CMS immobilier pour villas de luxe à St Barth.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
