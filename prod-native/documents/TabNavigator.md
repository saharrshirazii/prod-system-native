# TabNavigator

**Sökväg:** `src/components/TabNavigator.tsx`

## Beskrivning
`TabNavigator` är appens främsta gränssnitt efter att användaren har loggat in i appen. Den använder en "Bottom Tab Bar" för att låta användaren snabbt växla mellan de tre menyvalen vi placerat där.

## Tekniska detaljer
- **Bibliotek:** `@react-navigation/bottom-tabs`
- **Ikonpaket:** `Ionicons` (från `@expo/vector-icons`)
- **Färgschema:** - Aktiv flik: `colors.primary` (hämtas från `utils/color.js`)
    - Inaktiv flik: Grå (`gray`)

## Flikar
| Namn | Komponent | Ikon | Beskrivning |
| :--- | :--- | :--- | :--- |
| **Dashboard** | `Dashboard` | `grid` | Övergripande vy. |
| **Timer** | `Timer` | `timer` | Sektion för timer. |
| **Logga ut** | `LogoutScreen` | `log-out` | Vy för att logga ut från appen. |

## Inställningar
- `headerShown: false` används för att dölja navigationens standard header.