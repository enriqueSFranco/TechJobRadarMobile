import { FlatList, Platform, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { CardPizzaOrder } from "@/components/organisms/CardPizzaOrder";
import { styles as globalStyles } from "@/styles/globalStyles";

export default function Cart () {
  const { cart } = useShoppingCart();
  function handleIncrease () {
    console.log("agregar otros pizza");
  }
  function handleDecrease () {
    console.log("eliminar pizza");
  }

  return (
    <View style={globalStyles.container}>
      <Text>my orders</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CardPizzaOrder
            order={item}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
