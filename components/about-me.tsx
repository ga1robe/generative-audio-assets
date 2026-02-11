import { Card } from "@/components/ui/card"
import { User, Wrench, Brain, Music } from "lucide-react"

const traits = [
  {
    icon: User,
    label: "ISTP (Wirtuoz)",
    description: "Praktyk, ktory woli dzialanie od teorii. Myers-Briggs: ISTP-A.",
  },
  {
    icon: Brain,
    label: "Introwertyk + AQ",
    description: "Wewnetrzna motywacja, gleboka koncentracja, analityczne podejscie do problemow.",
  },
  {
    icon: Music,
    label: "Muzyk / Terapeuta",
    description: "Laczenie muzyki z terapia dzwiekiem i technologia generatywna.",
  },
  {
    icon: Wrench,
    label: "AI-tool enthusiast",
    description: "Automatyzacja workflow przy pomocy AI: UDIO, Python, ffmpeg, Notion, MCP.",
  },
]

export function AboutMe() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">O mnie</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Muzyk, terapeuta i entuzjasta narzedzi AI w srednim wieku
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="bg-card p-8 lg:p-12 mb-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Jestem introwertykiem ISTP-A (Wirtuoz) w srednim wieku, ktory laczy pasje do muzyki z fascynacja narzediami AI. Na co dzien pracuje jako terapeuta, a w wolnym czasie eksploruje mozliwosci generatywnego audio i automatyzacji workflow. Moje podejscie jest praktyczne i analityczne
              — wole dzialajacy prototyp od dlugich dyskusji.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Ten projekt to efekt mojej ciekawosci: czy mozna stworzyc powtarzalny pipeline, ktory od promptu AI generuje gotowe assety audio/video? Odpowiedz: tak, i jest open source.
            </p>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2">
            {traits.map((trait, index) => (
              <div key={index} className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <trait.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground mb-1">{trait.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{trait.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
