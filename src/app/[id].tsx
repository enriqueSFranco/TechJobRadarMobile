import React from "react";
import { Pressable, Text, View } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import pizzas from "@assets/data/products";

export default function PizzaDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          title: "pizza",
        }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{id}</Text>
        <Link href="/" asChild>
          <Pressable>
            <Text>regresar al menu</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
