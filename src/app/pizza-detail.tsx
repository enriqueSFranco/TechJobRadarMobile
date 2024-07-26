import React from "react";
import { Pressable, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function PizzaDetail() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>pizza detail</Text>
      <Link href={"/"} asChild>
        <Pressable>
          <Text>regresar al menu</Text>
        </Pressable>
      </Link>
    </View>
  );
}
