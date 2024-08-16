import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Link, useSegments } from "expo-router";
import { Colors } from "@/shared/constants.d";
import { Pizza } from "@/shared/types.d";
import { formatMoney } from "@/helpers/format-money";

type CardPizzaProps = {
  pizza: Pizza;
};

export const CardPizza = ({ pizza }: CardPizzaProps) => {
  const segments = useSegments(); // nos ayuda a verificar en que pantalla nos encontramos, si es de (user) | (admin)
  const formattedPrice = formatMoney({ value: pizza.price });

  return (
    <Link href={`${segments[0]}/menu/${pizza.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: pizza.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>{pizza.name}</Text>
        <Text style={styles.price}>{formattedPrice}</Text>
      </Pressable>
    </Link>
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
