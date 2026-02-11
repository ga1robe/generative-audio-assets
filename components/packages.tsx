import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

const packages = [
  {
    name: "Demo",
    price: "Darmowe",
    description: "Szybkie użycie i test",
    features: ["1 scena 33s (audio)", "Mini-grafika wizualizacji", "Format MP3", "Natychmiastowy dostęp"],
    cta: "Pobierz demo",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "399 PLN",
    description: "Kompletny zestaw assetów",
    features: [
      "3 sceny (Explorer, Battle, Ambient)",
      "Pliki MIDI + grafiki",
      "MP3/WAV + projekt LMMS",
      "Dostawa w 48h",
    ],
    cta: "Zamów teraz",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "799 PLN",
    description: "Pełna automatyzacja",
    features: [
      "Wszystko z pakietu Standard",
      "Pełne video MP4",
      "Skrypt automatyzujący (ffmpeg + Python)",
      "Instrukcja wdrożenia",
      "Wsparcie techniczne 30 dni",
    ],
    cta: "Wybierz Pro",
    highlighted: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Przykładowe pakiety
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Wybierz pakiet dopasowany do Twoich potrzeb</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative p-8 ${pkg.highlighted ? "border-accent shadow-lg scale-105" : "bg-card"}`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
                    Najpopularniejszy
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-card-foreground">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${pkg.highlighted ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
                variant={pkg.highlighted ? "default" : "outline"}
              >
                {pkg.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
