import { Music, Mail, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Music className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">AudioGen</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Generatywne assety audio, otwarty pipeline i automatyzacja workflow. UDIO, LMMS, Astrofox, ffmpeg, Python
              — od promptu do gotowego assetu.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#order" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ga1robe/generative-audio-assets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub repository"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Sekcje</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Oferta
                </a>
              </li>
              <li>
                <a href="#packages" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pakiety
                </a>
              </li>
              <li>
                <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pipeline
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Integracje
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Zasoby</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/ga1robe/generative-audio-assets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kod na GitHub
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  O mnie
                </a>
              </li>
              <li>
                <a href="#order" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2026 AudioGen &mdash; generatywne assety audio. Open source na GitHub.
          </p>
        </div>
      </div>
    </footer>
  )
}
