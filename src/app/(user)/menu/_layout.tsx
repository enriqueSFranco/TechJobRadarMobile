import { Link, Stack } from "expo-router";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ButtonPressable } from "@/components/atoms/ButtonPressable";
import { Text } from "react-native";

export default function MenuStack () {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/cart" asChild>
              <Text>cart</Text>
              {/* <ButtonPressable
                text="cart"
                style={{
                  backgroundColor: "transparent",
                  width: "auto",
                  height: "auto",
                }}
              /> */}
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
