import { useState } from "react";
import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ButtonPressable } from "@/components/atoms/ButtonPressable";
import { PizzaSizeSelector } from "@/components/molecules/PizzaSizeSelector";
import { PizzaNotFound } from "@/components/molecules/PizzaNotFound";
import { styles as globalStyles } from "@/styles/globalStyles";
import { PizzaSize } from "@/shared/enums.d";
import pizzas from "@assets/data/products";
import { pizzaSizeLabels, TEXTS } from "@/shared/constants.d";
import { formatMoney } from "@/helpers/format-money";
import { useShoppingCart } from "@/hooks/useShoppingCart";

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
    console.log("add item");
    if (pizza) addItem(pizza, pizzaSize);
  }

  return (
    // Main Container
    <View style={globalStyles.container}>
      {/* Pizza image and name */}
      <View>
        <Image
          source={{ uri: pizza.image }}
          style={{ width: "100%", aspectRatio: 1 }}
        />
        <Text>{pizza.name}</Text>
      </View>

      {/* Pizza size selector */}
      <View style={{ flex: 1, gap: 10, height: "auto" }}>
        <Text>{TEXTS.selectSize}</Text>
        <PizzaSizeSelector
          pizzaSizes={pizzaSizeLabels}
          stateFulPizzaSize={pizzaSize}
          onSelectedPizzaSize={handleSelectPizzaSize}
        />
      </View>
      <Text>{`${TEXTS.priceLabel}: ${formattedPrice}`}</Text>

      {/* Button add to cart*/}
      <ButtonPressable
        onPress={handleAddToCart}
        text={TEXTS.addToCart}
        style={{ width: "100%" }}
      />
    </View>
  );
}
