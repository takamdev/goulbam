
import { Stack } from 'expo-router';
import "../global.css" // added taiwindCSS

//route configuration
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen  name="index" options={{ headerShown: false}}/>
    </Stack>
  );
}