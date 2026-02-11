import { Card } from "@/components/ui/card"
import { BookOpen, Table, MessageCircle, ArrowRight } from "lucide-react"

const integrations = [
  {
    icon: BookOpen,
    name: "Notion",
    role: "Baza wiedzy",
    description:
      "Centralna baza wiedzy projektu: dokumentacja pipeline, notatki z eksperymentow, szablony promptow UDIO i referencje techniczne. Zintegrowana z reszta systemu przez API.",
    status: "Aktywna",
  },
  {
    icon: Table,
    name: "Google Sheets",
    role: "Tracking assetow",
    description:
      "Sledzenie statusu kazdego assetu: nazwa pliku, typ sceny (Explorer/Battle/Ambient), etap pipeline, format wyjsciowy i data ostatniej modyfikacji. Automatyczne aktualizacje z poziomu skryptow.",
    status: "Aktywna",
  },
  {
    icon: MessageCircle,
    name: "Discord via Zapier MCP",
    role: "Alerty i notyfikacje",
    description:
      "Automatyczne powiadomienia Discord przy kluczowych zdarzeniach: zakonczenie renderowania, bledy w pipeline, nowe assety gotowe do review. Konfigurowane przez Zapier MCP.",
    status: "Aktywna",
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Integracje i automatyzacja
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Notion, Google Sheets i Discord wspolpracuja w jednym systemie
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="bg-card p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <integration.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-card-foreground">{integration.name}</h3>
                      <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
                        {integration.role}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        {integration.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{integration.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Flow diagram */}
          <div className="mt-12 rounded-lg border border-border bg-card p-8">
            <h3 className="text-lg font-semibold text-card-foreground mb-6 text-center">Przeplyw danych</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="rounded-lg bg-accent/10 border border-accent/30 px-4 py-2 text-accent font-medium">
                Python scripts
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="rounded-lg bg-accent/10 border border-accent/30 px-4 py-2 text-accent font-medium">
                Google Sheets
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="rounded-lg bg-accent/10 border border-accent/30 px-4 py-2 text-accent font-medium">
                Zapier MCP
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="rounded-lg bg-accent/10 border border-accent/30 px-4 py-2 text-accent font-medium">
                Discord
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="rounded-lg bg-muted border border-border px-4 py-2 text-muted-foreground font-medium">
                  Notion
                </div>
                <span className="text-xs text-muted-foreground">dokumentacja + prompty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
