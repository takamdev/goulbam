
import { Stack } from 'expo-router';
//route configuration
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen  name="index" options={{ headerShown: false}}/>
    </Stack>
  );
}