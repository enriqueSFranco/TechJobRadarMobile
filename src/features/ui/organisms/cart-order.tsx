import { Order } from "@/shared/types.d";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Badged } from "../atoms/badged";
import { Link, useSegments } from "expo-router";

type CardOrderProps = {
  order: Order;
};

export function CardOrder ({ order }: CardOrderProps) {
  const segments = useSegments();
  const { id, created_at, status } = order;

  // 8/21/2024 -> dd/mm/yyyy
  function timeAgo (date: Date) {

    return "";
  }

  return (
    <Link href={`${segments[0]}/orders/${id}`} asChild>
      <Pressable style={styles.wrapper}>
        <View>
          <Text style={styles.orderIdText}>Order #{id}</Text>
          <Text style={styles.orderDateText}>
            {timeAgo(new Date(created_at))}
          </Text>
        </View>
        <Badged text={status} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  orderIdText: {
    fontWeight: "bold",
  },
  orderDateText: {
    color: "#8d99ae",
  },
});
