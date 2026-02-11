import { Card } from "@/components/ui/card"
import { Clock, Layers, Zap } from "lucide-react"

export function CaseStudy() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Case study: Prototyp gry RPG
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Jak pipeline dostarczyl kompletne audio dla indie game studio</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="bg-card p-8 lg:p-12">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Projekt: Fantasy RPG "Shadow Realm"</h3>
              <p className="text-muted-foreground leading-relaxed">
                Studio indie potrzebowalo szybkiego wdrozenia audio dla prototypu gry. Pipeline dostarczyl 3 sceny muzyczne
                (Explorer, Battle, Ambient) jako pętle 33s, pelne pliki MIDI dla dalszej edycji oraz skrypt Python automatyzujacy
                eksport do roznych formatow przez ffmpeg.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Assety</div>
                  <div className="text-sm text-muted-foreground">3 sceny + MIDI + grafiki</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Automatyzacja</div>
                  <div className="text-sm text-muted-foreground">Skrypt Python + ffmpeg</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Czas</div>
                  <div className="text-sm text-muted-foreground">Oszczędzono 2 tygodnie</div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground italic">
                "Dzięki gotowym assetom i automatyzacji mogliśmy skupić się na gameplayu. Integracja zajęła zaledwie
                kilka godzin, a jakość audio przekroczyła nasze oczekiwania."
                <span className="block mt-2 not-italic font-medium text-card-foreground">
                  — Michał K., Lead Developer
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
