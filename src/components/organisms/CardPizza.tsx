import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/shared/constants.d";
import { Pizza } from "@/shared/types.d";

type CardPizzaProps = {
  pizza: Pizza;
};

export const CardPizza = ({ pizza }: CardPizzaProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: pizza.image }} style={styles.image} />
      <Text>{pizza.name}</Text>
      <Text style={styles.price}>{pizza.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "50%",
    backgroundColor: Colors.light.background,
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    color: Colors.light.tint,
  },
});
