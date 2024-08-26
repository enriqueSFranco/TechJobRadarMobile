import { FlatList, Text, View } from "react-native";
import { Order as OrderType } from "@/shared/types.d";
import { CardOrder } from "./cart-order";

type ListOrdersProps = {
  orders: OrderType[];
};
export function ListOrders ({ orders }: ListOrdersProps) {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <CardOrder order={item} />}
      keyExtractor={(item) => `order-id-${item.id}`}
      ListEmptyComponent={
        <View>
          <Text>Empty Orders</Text>
        </View>
      }
    />
  );
}
