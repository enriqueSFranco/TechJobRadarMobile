import { Link, Stack } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from "react-native";

export default function MenuStack () {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/cart" asChild>
              <Pressable
                style={{
                  backgroundColor: "transparent",
                  width: "auto",
                  height: "auto",
                }}
              >
                <FontAwesome name="shopping-cart" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          headerRight: () => (
            <Link href="/cart" asChild>
              <Pressable
                style={{
                  backgroundColor: "transparent",
                  width: "auto",
                  height: "auto",
                }}
              >
                <FontAwesome name="shopping-cart" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
