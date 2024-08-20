import { Link, Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable } from "react-native";

export default function MenuStack () {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Admin",
          headerRight: () => (
            <Link href="/(admin)/menu/create" asChild>
              <Pressable
                style={{
                  backgroundColor: "transparent",
                  width: "auto",
                  height: "auto",
                }}
              >
                <FontAwesome name="plus-square-o" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="" asChild>
              <Pressable>
                <FontAwesome name="edit" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
