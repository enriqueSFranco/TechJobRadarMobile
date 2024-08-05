import { Link, Stack } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ButtonPressable } from "@/components/atoms/ButtonPressable";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/cart" asChild>
              <ButtonPressable
                text={
                  <MaterialIcons name="shopping-cart" size={24} color="black" />
                }
                style={{
                  backgroundColor: "transparent",
                  width: "auto",
                  height: "auto",
                }}
              />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
