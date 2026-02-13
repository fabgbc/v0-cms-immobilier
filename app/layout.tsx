import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saintbarth-villas.com"),
  title: {
    default: "CMS Immobilier Saint-Barthélemy | Sites & Gestion pour Villas de Luxe",
    template: "%s | Saint-Barth Villas CMS",
  },
  description:
    "Plateforme de gestion immobilière complète pour agences et propriétaires à Saint-Barthélemy. Site web premium, réservations directes, SEO natif, tarification dynamique.",
  keywords: [
    "CMS immobilier",
    "Saint-Barthélemy",
    "location villa luxe",
    "site immobilier",
    "gestion locative",
    "réservation directe",
    "St Barth",
  ],
  authors: [{ name: "Saint-Barth Villas" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "Saint-Barth Villas CMS",
    title: "CMS Immobilier Saint-Barthélemy | Sites & Gestion pour Villas de Luxe",
    description:
      "Plateforme de gestion immobilière complète pour agences et propriétaires à Saint-Barthélemy. Site web premium, réservations directes, SEO natif.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMS Immobilier Saint-Barthélemy",
    description:
      "Sites web premium & gestion locative pour villas de luxe à St Barth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Saint-Barth Villas CMS",
              description:
                "Plateforme de gestion immobilière pour agences et propriétaires à Saint-Barthélemy",
              url: "https://www.saintbarth-villas.com",
              areaServed: {
                "@type": "Place",
                name: "Saint-Barthélemy",
              },
              serviceType: "CMS immobilier",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md"
        >
          Aller au contenu principal
        </a>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
