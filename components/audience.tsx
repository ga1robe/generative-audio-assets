import { Gamepad2, Video, Megaphone, Smartphone } from "lucide-react"

const audiences = [
  {
    icon: Gamepad2,
    title: "Twórcy gier indie",
    description: "Szybko integrowalne assety do prototypów i produkcji",
  },
  {
    icon: Video,
    title: "Producenci wideo",
    description: "Profesjonalne podkłady muzyczne dla treści wideo",
  },
  {
    icon: Megaphone,
    title: "Twórcy reklam",
    description: "Dynamiczne ścieżki audio dla kampanii reklamowych",
  },
  {
    icon: Smartphone,
    title: "Deweloperzy aplikacji",
    description: "Audio dla aplikacji interaktywnych i mobilnych",
  },
]

export function Audience() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Dla kogo</h2>
          <p className="mt-4 text-lg text-muted-foreground">Rozwiązania dostosowane do różnych branż kreatywnych</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <audience.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
