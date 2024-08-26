import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export function OrderDetail () {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>order detail #{id}</Text>
    </View>
  );
}
