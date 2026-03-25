# HomeScreen

**Files:** `HomeScreen.tsx` 

## HomeScreen
- The HomeScreen serves as the primary landing page.
- I implemented `NativeStackNavigationProp` and a custom `RootStackParamList`.
- This prevents "undefined" screen errors. If the LOGIN route is renamed in the config, TypeScript will throw an error here, ensuring the app never crashes in production.
- `touchableOpacity`: for having tochable buttons.
- `handleLogin` function: to go to login page
- `handleSignup`function: to go to signup page
