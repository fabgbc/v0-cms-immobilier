import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-lg">
        <div className="luxury-divider mb-10" />
        <p className="font-serif text-8xl lg:text-9xl font-medium text-accent/80 mb-2 tracking-tight">404</p>
        <h1 className="text-3xl lg:text-4xl font-serif font-medium mb-4 tracking-tight">
          Page introuvable
        </h1>
        <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button variant="luxury" size="lg" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
        </Button>
        <div className="luxury-divider mt-10" />
      </div>
    </main>
  )
}
