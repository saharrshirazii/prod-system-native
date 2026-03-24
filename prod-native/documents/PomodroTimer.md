# Pomodoro Timer (React Native)

**Filer:**  
- `Timer.tsx` – Huvudkomponenten  
- `pomodoraConfig.ts` – Alla tidsinställningar  
- `color.ts` – Alla färger i appen  

**Syfte:** En ren och snygg Pomodoro-timer för mobil (React Native) med fokus, kort paus och lång paus. Användaren kan välja läge, starta, pausa och stoppa timern.

---

## Vad användaren får

- Tre stora knappar för att välja läge: **Fokus**, **Kort Paus**, **Lång Paus**
- Stor tydlig timer som visar återstående tid (t.ex. 25:00)
- Knappar för **Start**, **Paus**, **Fortsätt** och **Stopp**
- Färger som ändras beroende på vilket läge som är aktivt (knapparna)
- Enkel och ren design med mörk bakgrund

---

## Hur det fungerar – Steg för steg

1. Användaren väljer läge genom att trycka på en av de tre ikon-knapparna (Fokus / Kort Paus / Lång Paus)
2. Trycker på **Start** → timern börjar räkna ner
3. Timern räknar ner sekund för sekund
4. När tiden är slut stannar timern på 0:00
5. Användaren kan pausa, fortsätta eller stoppa helt och återställa till ursprunglig tid
6. Alla tider och färger styrs centralt från config- och color-filer

---

## Viktiga delar i Timer.tsx – vad den gör

### State-variabler

| Variabel          | Vad den gör |
|-------------------|-------------|
| `status`          | `"idle"`, `"running"` eller `"paused"` – håller koll på timerns tillstånd |
| `timeLeft`        | Återstående sekunder i nuvarande läge |
| `selectedMode`    | Vilket läge som är valt (`focus`, `shortBreak` eller `longBreak`) |

### Funktioner

- **`startTimer()`**  
  Sätter rätt tid beroende på valt läge och startar timern.

- **`handleStop()`**  
  Stoppar timern och återställer tiden till standard fokus-tid (25 minuter).

- **`formatTime(seconds)`**  
  Gör om sekunder till snyggt visningsformat: `25:00`, `4:59` osv.

- **`useEffect`**  
  Startar ett interval som räknar ner `timeLeft` varje sekund när status är `"running"`.

### UI-struktur

- **modeRow** → Tre tryckbara knappar med ikoner för Fokus, Kort Paus och Lång Paus
- **timerText** → Stor timer i mitten (64 px fet text)
- **buttonRow** → Knappar som ändras beroende på status (Start / Paus+Stopp / Fortsätt+Stopp)

---

## pomodoraConfig.ts – Tidsinställningar

Alla fasta tider samlade på ett ställe så det är lätt att ändra:

```ts
export const POMODORA = {
  WORK_MINUTES: 25,
  SHORT_BREAK_MINUTES: 5,
  LONG_BREAK_MINUTES: 15,
  TOTAL_WORK_SECONDS: 25 * 60,   // 1500 sekunder
} as const;
