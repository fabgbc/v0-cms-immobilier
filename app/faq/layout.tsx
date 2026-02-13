import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Questions Fréquentes",
  description:
    "Toutes les réponses à vos questions sur notre CMS immobilier pour Saint-Barthélemy. Propriétaires et agences, trouvez les informations dont vous avez besoin.",
  openGraph: {
    title: "FAQ | Saint-Barth Villas CMS",
    description:
      "Réponses aux questions fréquentes sur le CMS immobilier pour propriétaires et agences à St Barth.",
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
