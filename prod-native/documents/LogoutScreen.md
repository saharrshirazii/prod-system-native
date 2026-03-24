# LogoutScreen

**Sökväg:** `src/components/LogoutScreen.tsx` 

## Beskrivning
`LogoutScreen` är en enkel bekräftelsesida där användaren kan välja att logga ut från appen. 

## Funktionalitet
- **Navigering:** Vid tryck på knappen används `navigation.replace("HOME")`. 
  - *Notera:* Vi använder `.replace` så att användaren inte kan "backa" in i appen igen efter utloggning.

## Styling
- **Knapp:**  Design med `colors.primary`.
- **Bakgrund:** Vit (`colors.white`).
- **Text:** Titel i `colors.secondary`.

## Tekniska detaljer
- Använder `useNavigation` med TypeScript-typen `NativeStackNavigationProp`.
- Kräver att `HOME` finns definierad i `RootStackParamList`.