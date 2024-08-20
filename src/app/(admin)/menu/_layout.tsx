import { Link, Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable } from "react-native";
import { StockProvider } from "@/provider/StockProvider";

export default function MenuStack () {
  return (
    <StockProvider>
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
      </Stack>
    </StockProvider>
  );
}
