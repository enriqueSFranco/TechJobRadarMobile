import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/shared/constants.d";

type PizzaType = {
  id: number;
  name: string;
  image: string;
  price: number;
};

type CardPizzaProps = {
  pizza: PizzaType;
};

export const CardPizza = ({ pizza }: CardPizzaProps) => {
  return (
    <View>
      <Image source={{ uri: pizza.image }} style={styles.image} />
      <Text>{pizza.name}</Text>
      <Text style={styles.price}>{pizza.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    color: Colors.light.tint,
  },
});
