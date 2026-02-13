import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-serif font-medium text-accent mb-6">404</p>
        <h1 className="text-3xl font-serif font-medium mb-4 tracking-tight">
          Page introuvable
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Button variant="luxury" size="lg" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
        </Button>
      </div>
    </main>
  )
}
