import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Pipeline 2026: UDIO &rarr; LMMS &rarr; Astrofox &rarr; ffmpeg
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Dźwięk i muzyka generatywna — gotowe assety i automatyzacja
          </h1>

          <p className="mb-8 text-lg text-muted-foreground sm:text-xl text-balance">
            Gotowe assety dźwiękowe i zautomatyzowane workflowy dla twórców gier, wideo i projektów interaktywnych. Zoptymalizowane pętle 33s (Explorer, Battle, Ambient), pliki MIDI, wizualizacje i skrypty Python do automatyzacji produkcji.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/ga1robe/generative-audio-assets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Github className="h-5 w-5" />
                Kod źródłowy na GitHub
              </Button>
            </a>
            <a href="#packages">
              <Button size="lg" variant="outline" className="bg-transparent">
                Zobacz pakiety <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-accent">33s</div>
              <div className="text-sm text-muted-foreground">Pętle audio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">3</div>
              <div className="text-sm text-muted-foreground">Explorer / Battle / Ambient</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">7</div>
              <div className="text-sm text-muted-foreground">Narzędzi w pipeline</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Open source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
