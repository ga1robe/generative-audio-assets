import { Card } from "@/components/ui/card"
import { Music, FileAudio, Cog, Zap } from "lucide-react"

const benefits = [
  {
    icon: Music,
    title: "Gotowe sceny 33s",
    description: "Explorer / Battle / Ambient — natychmiastowe użycie w Twoich projektach",
  },
  {
    icon: FileAudio,
    title: "Pełny pakiet plików",
    description: "mp3/wav, mp4, MIDI, grafiki i kompletny projekt LMMS",
  },
  {
    icon: Cog,
    title: "Automatyzacja workflow",
    description: "Skrypty Python + szczegółowa instrukcja wdrożenia",
  },
  {
    icon: Zap,
    title: "Optymalizacja zasobów",
    description: "Konfiguracja narzędzi: astrofox + htop monitoring",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Co oferuję</h2>
          <p className="mt-4 text-lg text-muted-foreground">Kompleksowe rozwiązania audio dla Twojego projektu</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card p-6 hover:shadow-lg transition-shadow">
              <benefit.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
