import { Link, Stack } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
                <MaterialIcons name="add-box" size={24} color="black" />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
