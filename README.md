# Dzwiek i muzyka generatywna -- gotowe assety i automatyzacja

Gotowe assety dzwiekowe i zautomatyzowane workflowy dla tworcow gier, wideo i projektow interaktywnych. Zoptymalizowane petle 33 s (Explorer, Battle, Ambient), pliki MIDI, wizualizacje i skrypty Python do automatyzacji produkcji.

| Parametr | Wartosc |
| --- | --- |
| Dlugosc petli | 33 s |
| Typy scen | Explorer / Battle / Ambient |
| Narzedzi w pipeline | 7 |
| Licencja kodu | Open source (MIT) |

> Repozytorium: <https://github.com/ga1robe/generative-audio-assets>

---

## Spis tresci

1. [Assety muzyczne](#assety-muzyczne)
2. [Pipeline techniczny](#pipeline-techniczny)
3. [Integracje](#integracje)
4. [O mnie](#o-mnie)
5. [Pakiety](#pakiety)
6. [FAQ](#faq)
7. [Uruchomienie lokalne](#uruchomienie-lokalne)
8. [Licencja](#licencja)

---

## Assety muzyczne

Kazdy asset to petla audio o dlugosci **33 sekund**, zoptymalizowana do loopowania. Trzy typy scen:

| Scena | Charakter | Zastosowanie |
| --- | --- | --- |
| **Explorer** | Spokojne tempo, melodyczne | Eksploracja, menu, dialogi |
| **Battle** | Dynamiczne, intensywne | Walka, akcja, sceny napieciowe |
| **Ambient** | Atmosferyczne, otoczeniowe | Tlo, cutscenki, ekrany ladowania |

Formaty wyjsciowe:

- Audio: MP3 (320 kbps), WAV (44.1 kHz / 16-bit)
- MIDI: dla kazdej sciezki (do dalszej edycji)
- Video: MP4 (1080p, H.264) z wizualizacja
- Projekt: LMMS (.mmpz)
- Grafika: PNG (przezroczyste tlo)

---

## Pipeline techniczny

7 etapow od promptu AI do gotowego assetu audio/video:

```
UDIO --> Vocal Remover --> Basic Pitch --> LMMS --> Astrofox --> ffmpeg --> Python scripts
 (1)        (2)              (3)          (4)        (5)        (6)          (7)
```

### Etapy szczegolowo

| # | Narzedzie | Rola | Opis |
| --- | --- | --- | --- |
| 1 | **UDIO** | Generacja | Generacja surowego audio AI na podstawie promptu tekstowego |
| 2 | **Vocal Remover** | Separacja | Izolacja instrumentalnej sciezki, usuwanie wokali |
| 3 | **Basic Pitch** | Analiza | Konwersja audio do MIDI z detekcja nut i tempa |
| 4 | **LMMS** | Produkcja | Aranzacja MIDI, layering instrumentow, miksowanie |
| 5 | **Astrofox** | Wizualizacja | Generowanie wizualizacji audio (spektrogramy, waveformy) |
| 6 | **ffmpeg** | Encoding | Laczenie audio z video, konwersja formatow, batch export |
| 7 | **Python scripts** | Automatyzacja | Automatyzacja calego pipeline, batch processing, metadane |

### Kategorie narzedzi

- **Generacja AI** -- UDIO (audio gen), Vocal Remover (izolacja)
- **Analiza i produkcja** -- Basic Pitch (audio-to-MIDI), LMMS (DAW open source)
- **Wizualizacja i encoding** -- Astrofox (visualizer), ffmpeg (media toolkit)
- **Automatyzacja** -- Python (orchestrator), Bash + htop (monitoring)

Skrypty Python automatyzuja kolejne etapy, dzieki czemu proces od promptu do gotowego assetu jest powtarzalny i skalowalny.

---

## Integracje

Trzy systemy wspolpracuja w jednym workflow:

### Notion -- baza wiedzy

Centralna baza wiedzy projektu: dokumentacja pipeline, notatki z eksperymentow, szablony promptow UDIO i referencje techniczne. Zintegrowana z reszta systemu przez API.

### Google Sheets -- tracking assetow

Sledzenie statusu kazdego assetu: nazwa pliku, typ sceny (Explorer / Battle / Ambient), etap pipeline, format wyjsciowy i data ostatniej modyfikacji. Automatyczne aktualizacje z poziomu skryptow.

### Discord via Zapier MCP -- alerty

Automatyczne powiadomienia Discord przy kluczowych zdarzeniach: zakonczenie renderowania, bledy w pipeline, nowe assety gotowe do review. Konfigurowane przez Zapier MCP.

### Przeplyw danych

```
Python scripts --> Google Sheets --> Zapier MCP --> Discord
                                                      |
                      Notion (dokumentacja + prompty) -+
```

---

## O mnie

Muzyk, terapeuta i entuzjasta narzedzi AI w srednim wieku.

Jestem introwertykiem **ISTP-A (Wirtuoz)** w srednim wieku, ktory laczy pasje do muzyki z fascynacja narzediami AI. Na co dzien pracuje jako terapeuta, a w wolnym czasie eksploruje mozliwosci generatywnego audio i automatyzacji workflow. Moje podejscie jest praktyczne i analityczne -- wole dzialajacy prototyp od dlugich dyskusji.

Ten projekt to efekt mojej ciekawosci: czy mozna stworzyc powtarzalny pipeline, ktory od promptu AI generuje gotowe assety audio/video? Odpowiedz: tak, i jest open source.

| Cecha | Opis |
| --- | --- |
| ISTP (Wirtuoz) | Praktyk, ktory woli dzialanie od teorii. Myers-Briggs: ISTP-A. |
| Introwertyk + AQ | Wewnetrzna motywacja, gleboka koncentracja, analityczne podejscie. |
| Muzyk / Terapeuta | Laczenie muzyki z terapia dzwiekiem i technologia generatywna. |
| AI-tool enthusiast | Automatyzacja workflow przy pomocy AI: UDIO, Python, ffmpeg, Notion, MCP. |

---

## Pakiety

| | Demo | Standard | Pro |
| --- | --- | --- | --- |
| Cena | Darmowe | 399 PLN | 799 PLN |
| Sceny 33 s | 1 | 3 (Explorer, Battle, Ambient) | 3 + pelne video MP4 |
| MIDI + grafiki | -- | tak | tak |
| Formaty | MP3 | MP3/WAV + LMMS | MP3/WAV + LMMS + MP4 |
| Skrypt automatyzujacy | -- | -- | ffmpeg + Python |
| Instrukcja wdrozenia | -- | -- | tak |
| Wsparcie techniczne | -- | -- | 30 dni |
| Dostawa | Natychmiastowa | 48 h | 3-5 dni roboczych |

---

## FAQ

**Czy projekt jest open source?**
Tak. Caly kod zrodlowy, skrypty Python i konfiguracja pipeline sa dostepne na GitHub: [ga1robe/generative-audio-assets](https://github.com/ga1robe/generative-audio-assets). Mozesz forkowac, modyfikowac i uzywac we wlasnych projektach.

**W jakich formatach dostarczane sa pliki?**
Audio: MP3 (320 kbps) i WAV (44.1 kHz, 16-bit). Pliki MIDI dla kazdej sciezki. Video: MP4 (1080p, H.264). Projekty: LMMS (.mmpz). Grafiki: PNG z przezroczystym tlem.

**Jak dziala pipeline UDIO -> ffmpeg -> Python?**
Pipeline sklada sie z 7 etapow: UDIO generuje surowe audio AI, Vocal Remover izoluje instrumenty, Basic Pitch konwertuje do MIDI, LMMS sluzy do aranzacji, Astrofox generuje wizualizacje, ffmpeg laczy audio z video, a skrypty Python automatyzuja caly proces.

**Czym sa petle 33 s i typy scen?**
Kazdy asset to petla audio o dlugosci 33 sekund, zoptymalizowana do loopowania. Trzy typy scen: Explorer (eksploracja, spokojne tempo), Battle (walka, dynamiczne), Ambient (otoczenie, atmosferyczne).

**Jak dzialaja integracje Notion / Google Sheets / Discord?**
Notion sluzy jako baza wiedzy z dokumentacja i promptami. Google Sheets trackuje status kazdego assetu w pipeline. Discord (przez Zapier MCP) wysyla automatyczne powiadomienia o zakonczeniu renderowania lub bledach.

**Czy moge uzyc assetow komercyjnie?**
Tak. Pakiety Demo i Standard zawieraja licencje do uzytku komercyjnego w grach, filmach, reklamach i aplikacjach. Kod pipeline jest open source (MIT). Nie mozesz jedynie odsprzedawac samych assetow jako produktu.

---

## Uruchomienie lokalne

```bash
# Klonuj repozytorium
git clone https://github.com/ga1robe/generative-audio-assets.git
cd generative-audio-assets

# Zainstaluj zaleznosci (wymaga Node.js 18+)
pnpm install

# Uruchom serwer deweloperski
pnpm dev
```

Aplikacja bedzie dostepna pod adresem `http://localhost:3000`.

### Technologie strony

- Next.js 15 (App Router)
- Tailwind CSS v4
- shadcn/ui
- TypeScript
- Vercel Analytics

---

## Licencja

Kod pipeline i skrypty: **MIT**
Assety muzyczne: licencja komercyjna (szczegoly w pakietach powyzej).

---

&copy; 2026 AudioGen -- generatywne assety audio. Open source na [GitHub](https://github.com/ga1robe/generative-audio-assets).
