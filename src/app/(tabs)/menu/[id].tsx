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
    setPizzaSize(size);
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
      <View style={{ flex: 1, gap: 10, height:'auto' }}>
        <Text>Select size</Text>
        <FlatList
          data={pizzaSizeLabels}
          renderItem={({ item }) => {
            const activeBackgroundColor =
              item === pizzaSize ? "#212529" : "#e9ecef";
            const activeTextColor = item === pizzaSize ? "#e9ecef" : "#212529";
            return (
              <ButtonPressable
                text={item}
                onPress={() => handleSelectPizzaSize({ size: item })}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  backgroundColor: activeBackgroundColor,
                }}
                textStyle={{ color: activeTextColor }}
              />
            );
          }}
          keyExtractor={(item) => item}
          numColumns={4}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{
            width: "100%",
            gap: 10,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        />
      </View>
      <Text>Price {pizza.price}</Text>
      <ButtonPressable text="Add to cart" style={{ width: "100%" }} />
    </View>
  );
}
