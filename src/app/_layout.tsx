import { Stack } from "expo-router";
import { ShoppingCartProvider } from "@/provider/ShoppingCartProvider";
import { Colors } from "@/shared/constants.d";

export default function Layout () {
  return (
    <ShoppingCartProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
          headerTintColor: Colors.dark.color,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="cart" options={{ presentation: "modal" }} />
      </Stack>
    </ShoppingCartProvider>
  );
}
