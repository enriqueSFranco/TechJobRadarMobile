import { View, Text } from "react-native";
import { TEXTS } from "@/shared/constants.d";
import { styles } from "@/styles/globalStyles";

export function PizzaNotFound() {
  return (
    <View style={styles.container}>
      <Text>{TEXTS.pizzaNotFound}</Text>
    </View>
  );
}
