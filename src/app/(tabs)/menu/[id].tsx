import React, { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ButtonPressable } from "@/components/atoms/ButtonPressable";
import pizzas from "@assets/data/products";
import { PizzaSize } from "@/shared/enums.d";
import { pizzaSizeLabels } from "@/shared/constants.d";

export default function PizzaDetail() {
  const [pizzaSize, setPizzaSize] = useState<PizzaSize>(PizzaSize.MEDIUM);
  const { id } = useLocalSearchParams<{ id: string }>();

  const pizza = pizzas.find((pizza) => pizza.id.toString() === id);

  function handleSelectPizzaSize({ size }: { size: PizzaSize }) {
    console.log(`seleccionaste la pizza de tamaño ${size}`);
  }

  if (!pizza) {
    return (
      <View>
        <Text>Pizza not found</Text>
      </View>
    );
  }
  console.log(pizza);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <Image
        source={{ uri: pizza.image }}
        style={{ width: "100%", aspectRatio: 1 }}
      />
      <Text>{pizza.name}</Text>
      <FlatList
        data={pizzaSizeLabels}
        renderItem={({ item }) => (
          <ButtonPressable
            key={`pizza-size-${item}`}
            text={item}
            onPress={() => handleSelectPizzaSize({ size: item })}
            style={{ width: 20, height: 20 }}
          />
        )}
        keyExtractor={(item) => item}
        numColumns={4}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
      <Text>{pizza.price}</Text>
      <ButtonPressable text="Add to cart" />
    </View>
  );
}
