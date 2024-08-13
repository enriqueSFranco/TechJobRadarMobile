import { FlatList, Platform, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { CardPizzaOrder } from "@/components/organisms/CardPizzaOrder";
import { styles as globalStyles } from "@/styles/globalStyles";

export default function Cart () {
  const { cart } = useShoppingCart();

  return (
    <View style={globalStyles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <FlatList
        data={cart}
        renderItem={({ item }) => <CardPizzaOrder order={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}
