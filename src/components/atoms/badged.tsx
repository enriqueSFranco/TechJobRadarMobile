import { Text, View } from "react-native";

type BadgedProps = {
  text: string;
};

export function Badged ({ text }: BadgedProps) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
