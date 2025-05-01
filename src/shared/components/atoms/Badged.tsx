import { Text, View } from "react-native";

type Props = {
  text: string;
};

export function Badged({ text }: Props) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
