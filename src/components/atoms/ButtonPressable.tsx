import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonPressableProps = PressableProps & {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

export function ButtonPressable({
  text,
  textStyle,
  style,
  ...pressableProps
}: ButtonPressableProps) {
  return (
    <Pressable style={[defaultButtonStyle, style]} {...pressableProps}>
      <Text style={[defaultTextStyle, textStyle]}>{text}</Text>
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
