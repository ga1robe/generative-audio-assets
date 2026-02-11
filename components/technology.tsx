import { Code, AudioWaveform as Waveform, ImageIcon, Cog, ArrowRight } from "lucide-react"

const pipelineSteps = [
  {
    step: 1,
    name: "UDIO",
    description: "Generacja surowego audio AI na podstawie promptu tekstowego",
    category: "Generacja",
  },
  {
    step: 2,
    name: "Vocal Remover",
    description: "Izolacja instrumentalnej ścieżki, usuwanie wokali",
    category: "Separacja",
  },
  {
    step: 3,
    name: "Basic Pitch",
    description: "Konwersja audio do MIDI z detekcją nut i tempa",
    category: "Analiza",
  },
  {
    step: 4,
    name: "LMMS",
    description: "Aranżacja MIDI, layering instrumentów, miksowanie",
    category: "Produkcja",
  },
  {
    step: 5,
    name: "Astrofox",
    description: "Generowanie wizualizacji audio (spektrogramy, waveformy)",
    category: "Wizualizacja",
  },
  {
    step: 6,
    name: "ffmpeg",
    description: "Łączenie audio z video, konwersja formatów, batch export",
    category: "Encoding",
  },
  {
    step: 7,
    name: "Python scripts",
    description: "Automatyzacja całego pipeline, batch processing, metadane",
    category: "Automatyzacja",
  },
]

const technologies = [
  {
    icon: Waveform,
    category: "Generacja AI",
    tools: ["UDIO (audio gen)", "Vocal Remover (izolacja)"],
  },
  {
    icon: Code,
    category: "Analiza i produkcja",
    tools: ["Basic Pitch (audio-to-MIDI)", "LMMS (DAW open source)"],
  },
  {
    icon: ImageIcon,
    category: "Wizualizacja i encoding",
    tools: ["Astrofox (visualizer)", "ffmpeg (media toolkit)"],
  },
  {
    icon: Cog,
    category: "Automatyzacja",
    tools: ["Python (orchestrator)", "Bash + htop (monitoring)"],
  },
]

export function Technology() {
  return (
    <section id="technology" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Pipeline techniczny
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            7 etapów od promptu AI do gotowego assetu audio/video
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="mx-auto max-w-4xl mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {pipelineSteps.map((step, index) => (
              <div key={step.step} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent font-bold text-sm border border-accent/30">
                    {step.step}
                  </div>
                  <span className="mt-2 text-xs font-semibold text-foreground whitespace-nowrap">{step.name}</span>
                  <span className="text-[10px] text-muted-foreground">{step.category}</span>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-accent/50 flex-shrink-0 mt-[-1rem]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed steps */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Narzędzia w pipeline</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {technologies.map((tech, index) => (
                <div key={index} className="rounded-lg border border-border bg-card p-6">
                  <tech.icon className="h-8 w-8 text-accent mb-3" />
                  <div className="font-semibold text-card-foreground mb-2">{tech.category}</div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {tech.tools.map((tool, idx) => (
                      <div key={idx}>{tool}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Przebieg produkcji</h3>
            <div className="space-y-4">
              {pipelineSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="pt-0.5">
                    <div className="text-foreground font-medium">{step.name}</div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground leading-relaxed">
            Cały pipeline jest open source i dostępny na{" "}
            <a
              href="https://github.com/ga1robe/generative-audio-assets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
            >
              GitHub
            </a>
            . Skrypty Python automatyzują kolejne etapy, dzięki czemu proces od promptu do gotowego assetu jest powtarzalny i skalowalny.
          </p>
        </div>
      </div>
    </section>
  )
}
