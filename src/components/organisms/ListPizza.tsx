import { Pizza } from "@/shared/types";
import { FlatList } from "react-native";
import { CardPizza } from "./CardPizza";
import { Stack } from "expo-router";

type ListPizzaProps = {
  pizzas: Pizza[];
};

export const ListPizza = ({ pizzas }: ListPizzaProps) => {
  return (
    <FlatList
      data={pizzas}
      renderItem={({ item }) => <CardPizza pizza={item} />}
      keyExtractor={(item) => item.name}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
};
