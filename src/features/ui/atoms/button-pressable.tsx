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
  style?: StyleProp<ViewStyle>;
};

export const ButtonPressable = ({
  text,
  textStyle,
  style,
  ...props
}: ButtonPressableProps) => {
  return (
    <Pressable {...props} style={[styles.defaultButton, style]}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
