import { CartItem } from "@/shared/types.d";
import { Image, StyleSheet, Text, View } from "react-native";
import { ButtonPressable } from "../atoms/ButtonPressable";
import { Colors } from "@/shared/constants.d";
import { formatMoney } from "@/helpers/format-money";

type CardPizzaOrderProps = {
  order: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function CardPizzaOrder ({
  order,
  onIncrease,
  onDecrease,
}: CardPizzaOrderProps) {
  const { product, quantity, size } = order;
  const { image, name, price } = product;
  const formattedPrice = formatMoney({ value: price });

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.price}>{formattedPrice}</Text>
            <Text style={styles.size}>Size: {size}</Text>
          </View>
        </View>
      </View>
      <View style={styles.controlsContainer}>
        <ButtonPressable
          text="+"
          onPress={onIncrease}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Text>{quantity}</Text>
        <ButtonPressable
          text="-"
          onPress={onDecrease}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: Colors.light.background,
    borderRadius: 8,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    color: Colors.light.color,
    fontWeight: "bold",
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    marginTop: 4,
  },
  price: {
    color: "#09F",
    fontWeight: "600",
    fontSize: 16,
  },
  size: {
    fontSize: 14,
    color: "#333",
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.light.color,
    fontSize: 18,
  },
  quantity: {
    fontSize: 16,
    color: "#333",
  },
});
