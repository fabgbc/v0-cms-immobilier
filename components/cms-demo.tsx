"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

const defaultT = {
  fr: {
    adminTitle: "Panneau d'administration",
    previewTitle: "Aperçu du site",
    villaName: "Nom de la villa",
    pricePerNight: "Prix par nuit (€)",
    bedrooms: "Chambres",
    description: "Description",
    image: "Image de couverture",
    villaNamePlaceholder: "Villa Émeraude",
    descPlaceholder: "Une magnifique villa surplombant la baie de Gouverneur...",
    fromLabel: "à partir de",
    nightLabel: "/nuit",
    bedroomsLabel: "chambres",
    bookNow: "Réserver maintenant",
    livePreview: "Aperçu en temps réel",
    dragToResize: "Glissez pour redimensionner",
  },
  en: {
    adminTitle: "Admin Panel",
    previewTitle: "Website Preview",
    villaName: "Villa name",
    pricePerNight: "Price per night (€)",
    bedrooms: "Bedrooms",
    description: "Description",
    image: "Cover image",
    villaNamePlaceholder: "Villa Émeraude",
    descPlaceholder: "A stunning villa overlooking Gouverneur bay...",
    fromLabel: "from",
    nightLabel: "/night",
    bedroomsLabel: "bedrooms",
    bookNow: "Book now",
    livePreview: "Live preview",
    dragToResize: "Drag to resize",
  },
}

const coverImages = [
  { label: "Villa Océan", url: "/villa-owner-looking-at-website-on-laptop-in-luxur.jpg" },
  { label: "Villa Bureau", url: "/modern-luxury-real-estate-office-in-saint-barthele.jpg" },
]

// Admin panel content (shared between mobile and desktop)
function AdminPanel({ t, villaName, setVillaName, price, setPrice, bedrooms, setBedrooms, description, setDescription, selectedImage, setSelectedImage }: {
  t: typeof defaultT.fr
  villaName: string
  setVillaName: (v: string) => void
  price: number
  setPrice: (v: number) => void
  bedrooms: number
  setBedrooms: (v: number) => void
  description: string
  setDescription: (v: string) => void
  selectedImage: number
  setSelectedImage: (v: number) => void
}) {
  return (
    <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8 bg-muted/30">
      <div className="flex items-center gap-3 mb-5 sm:mb-8">
        <div className="w-8 h-8 bg-accent/10 flex items-center justify-center rounded-sm shrink-0">
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        <h3 className="font-serif text-base sm:text-lg font-medium">{t.adminTitle}</h3>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1.5 sm:mb-2">{t.villaName}</label>
          <input
            type="text"
            value={villaName}
            onChange={(e) => setVillaName(e.target.value)}
            className="w-full px-3 sm:px-4 py-3 bg-background border border-border/50 rounded-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 sm:mb-2">{t.pricePerNight}</label>
            <input
              type="number"
              inputMode="numeric"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-3 sm:px-4 py-3 bg-background border border-border/50 rounded-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 sm:mb-2">{t.bedrooms}</label>
            <input
              type="number"
              inputMode="numeric"
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              min={1}
              max={20}
              className="w-full px-3 sm:px-4 py-3 bg-background border border-border/50 rounded-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5 sm:mb-2">{t.description}</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-3 sm:px-4 py-3 bg-background border border-border/50 rounded-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5 sm:mb-2">{t.image}</label>
          <div className="grid grid-cols-2 gap-3">
            {coverImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={cn(
                  "relative rounded-sm overflow-hidden h-16 sm:h-20 border-2 transition-all",
                  selectedImage === i ? "border-accent" : "border-border/50 hover:border-accent/30"
                )}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {selectedImage === i && (
                  <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Preview panel content (shared between mobile and desktop)
function PreviewPanel({ t, villaName, price, bedrooms, description, selectedImage }: {
  t: typeof defaultT.fr
  villaName: string
  price: number
  bedrooms: number
  description: string
  selectedImage: number
}) {
  return (
    <div className="h-full overflow-y-auto bg-background">
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-muted/50 border-b border-border/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-2 sm:mx-4">
          <div className="bg-background border border-border/50 rounded-sm px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-muted-foreground text-center truncate">
            saintbarth-villas.com/{villaName.toLowerCase().replace(/\s+/g, "-")}
          </div>
        </div>
        <Badge variant="outline" className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 hidden sm:inline-flex">{t.livePreview}</Badge>
      </div>

      {/* Simulated website preview */}
      <div className="p-0">
        {/* Hero Image */}
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-40 sm:h-52 lg:h-64 overflow-hidden"
        >
          <img
            src={coverImages[selectedImage].url}
            alt={villaName}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <motion.h1
              key={villaName}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg sm:text-xl lg:text-2xl font-serif font-medium text-white mb-1 sm:mb-2 truncate"
            >
              {villaName || "..."}
            </motion.h1>
            <div className="flex items-center gap-3 sm:gap-4 text-white/80 text-xs sm:text-sm">
              <span>{bedrooms} {t.bedroomsLabel}</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Saint-Barthélemy</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3">
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">{t.fromLabel}</p>
              <motion.p
                key={price}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-2xl sm:text-3xl font-serif font-medium"
              >
                €{price.toLocaleString()}<span className="text-xs sm:text-sm font-sans text-muted-foreground">{t.nightLabel}</span>
              </motion.p>
            </div>
            <div className="bg-gradient-to-r from-gold-dark via-accent to-gold-light text-accent-foreground px-3 sm:px-6 py-2 sm:py-2.5 rounded-sm text-xs sm:text-sm font-medium shrink-0">
              {t.bookNow}
            </div>
          </div>

          <motion.p
            key={description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
          >
            {description || "..."}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export function CmsDemo() {
  const { language } = useLanguage()
  const t = defaultT[language]

  const [villaName, setVillaName] = useState(t.villaNamePlaceholder)
  const [price, setPrice] = useState(1200)
  const [bedrooms, setBedrooms] = useState(4)
  const [description, setDescription] = useState(t.descPlaceholder)
  const [selectedImage, setSelectedImage] = useState(0)

  const sharedProps = { t, villaName, setVillaName, price, setPrice, bedrooms, setBedrooms, description, setDescription, selectedImage, setSelectedImage }
  const previewProps = { t, villaName, price, bedrooms, description, selectedImage }

  return (
    <>
      {/* Mobile: stacked layout */}
      <div className="md:hidden border border-border/50 rounded-sm overflow-hidden bg-card">
        <div className="max-h-[400px]">
          <AdminPanel {...sharedProps} />
        </div>
        <div className="border-t border-border/30 h-[350px]">
          <PreviewPanel {...previewProps} />
        </div>
      </div>

      {/* Desktop: resizable side-by-side */}
      <div className="hidden md:block h-[600px] lg:h-[700px] border border-border/50 rounded-sm overflow-hidden bg-card">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={40} minSize={30} maxSize={60}>
            <AdminPanel {...sharedProps} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60} minSize={40}>
            <PreviewPanel {...previewProps} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  )
}
