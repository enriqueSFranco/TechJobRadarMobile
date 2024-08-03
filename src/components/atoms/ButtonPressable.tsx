import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonPressableProps = PressableProps & {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  color?: `#${string}`; // TODO: Create type hexadecimal
  bgColor?: `#${string}`;
  style?: StyleProp<ViewStyle>;
};

export function ButtonPressable({
  text,
  textStyle,
  style,
}: ButtonPressableProps) {
  return (
    <Pressable style={[style, defaultButtonStyle]}>
      <Text style={[textStyle, defaultTextStyle]}>{text}</Text>
    </Pressable>
  );
}

const defaultButtonStyle: ViewStyle = {
  backgroundColor: "#222",
  borderRadius: 6,
  width: 100,
  height: 50,
  justifyContent: "center",
  alignItems: "center",
};

const defaultTextStyle: TextStyle = {
  color: "#fff",
  fontSize: 16,
};
