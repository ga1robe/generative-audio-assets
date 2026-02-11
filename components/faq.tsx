import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Czy projekt jest open source?",
    answer:
      "Tak! Caly kod zrodlowy, skrypty Python i konfiguracja pipeline sa dostepne na GitHub: github.com/ga1robe/generative-audio-assets. Mozesz forkowac, modyfikowac i uzywac we wlasnych projektach.",
  },
  {
    question: "W jakich formatach dostarczane sa pliki?",
    answer:
      "Audio: MP3 (320kbps) i WAV (44.1kHz, 16-bit). Pliki MIDI dla kazdej sciezki. Video: MP4 (1080p, H.264). Projekty: LMMS (.mmpz). Grafiki: PNG z przezroczystym tlem.",
  },
  {
    question: "Jak dziala pipeline UDIO → ffmpeg → Python?",
    answer:
      "Pipeline sklada sie z 7 etapow: UDIO generuje surowe audio AI, Vocal Remover izoluje instrumenty, Basic Pitch konwertuje do MIDI, LMMS sluzy do aranzacji, Astrofox generuje wizualizacje, ffmpeg laczy audio z video, a skrypty Python automatyzuja caly proces.",
  },
  {
    question: "Czym sa petla 33s i typy scen?",
    answer:
      "Kazdy asset to petla audio o dlugosci 33 sekund, zoptymalizowana do loopowania. Trzy typy scen: Explorer (eksploracja, spokojne tempo), Battle (walka, dynamiczne), Ambient (otoczenie, atmosferyczne).",
  },
  {
    question: "Jak dzialaja integracje Notion / Google Sheets / Discord?",
    answer:
      "Notion sluzy jako baza wiedzy z dokumentacja i promptami. Google Sheets trackuje status kazdego assetu w pipeline. Discord (przez Zapier MCP) wysyla automatyczne powiadomienia o zakonczeniu renderowania lub bledach.",
  },
  {
    question: "Czy moge uzyc assetow komercyjnie?",
    answer:
      "Tak! Pakiety Demo i Standard zawieraja licencje do uzytku komercyjnego w grach, filmach, reklamach i aplikacjach. Kod pipeline jest open source (MIT). Nie mozesz jedynie odsprzedawac samych assetow jako produktu.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Najczęściej zadawane pytania
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Znajdź odpowiedzi na popularne pytania</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg bg-card px-6"
              >
                <AccordionTrigger className="text-left text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
