import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { PizzaNotFound } from "@/features/ui/molecules/pizza-not-found";
import { styles as globalStyles } from "@/styles/globalStyles";
import { PizzaSize } from "@/shared/enums.d";
import pizzas from "@assets/data/products";
import { Colors, pizzaSizeLabels, TEXTS } from "@/shared/constants.d";
import { formatMoney } from "@/helpers/format-money";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { PizzaSizeSelector } from "@/features/ui/molecules/pizza-size-selector";
import { ButtonPressable } from "@/features/ui/atoms/button-pressable";

export default function PizzaDetail () {
  const [pizzaSize, setPizzaSize] = useState<PizzaSize>(PizzaSize.MEDIUM);
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addItem } = useShoppingCart();

  const pizza = pizzas.find((pizza) => pizza.id.toString() === id);

  if (!pizza) {
    return <PizzaNotFound />;
  }

  let formattedPrice = formatMoney({ value: pizza.price });

  function handleSelectPizzaSize (pizzaSize: PizzaSize) {
    setPizzaSize(pizzaSize);
  }

  function handleAddToCart () {
    if (!pizza) return;
    addItem(pizza, pizzaSize);
    router.push("/cart");
  }

  return (
    // Main Container
    <View style={[globalStyles.container, styles.wrapper]}>
      <Stack.Screen options={{ title: pizza.name }} />
      {/* Pizza image and name */}
      <View style={styles.pizzaImage}>
        <Image
          source={{ uri: pizza.image }}
          style={{ width: "100%", aspectRatio: 1 }}
        />
        <Text style={{ color: Colors.dark.color }}>{pizza.name}</Text>
      </View>

      {/* Pizza size selector */}
      <PizzaSizeSelector
        pizzaSizes={pizzaSizeLabels}
        stateFulPizzaSize={pizzaSize}
        onSelectedPizzaSize={handleSelectPizzaSize}
      />
      <Text>{`${TEXTS.priceLabel}: ${formattedPrice}`}</Text>

      {/* Button add to cart*/}
      <ButtonPressable
        onPress={handleAddToCart}
        text="Update"
        style={{
          width: "100%",
          backgroundColor: Colors.dark.background,
          borderRadius: 6,
          padding: 12,
        }}
        textStyle={{ color: Colors.dark.color }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pizzaImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
  },
});
