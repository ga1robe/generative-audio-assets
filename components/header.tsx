import { Button } from "@/components/ui/button"
import { Music, Menu, Github } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold">AudioGen</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Oferta
            </a>
            <a href="#packages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pakiety
            </a>
            <a href="#technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pipeline
            </a>
            <a href="#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Integracje
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              O mnie
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ga1robe/generative-audio-assets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </a>
            <a href="#order">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Kontakt
              </Button>
            </a>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
