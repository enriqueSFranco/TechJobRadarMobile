import { Link, Stack } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
                <MaterialIcons name="shopping-cart" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
