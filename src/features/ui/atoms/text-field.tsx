import { useId } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TextInputProps,
} from "react-native";

type TextFieldProps = {
  prompt?: string;
  label?: string;
  value: string;
  bgColor?: `#${string}` | string;
  icon?: React.ReactNode;
};

export const TextField = ({
  prompt = "",
  label,
  value,
  bgColor = "#F4F4F4",
  icon,
  ...rest
}: TextFieldProps & TextInputProps) => {
  const inputWithId = useId();

  return (
    <View style={[styles.box, { gap: label !== undefined ? 8 : 0 }]}>
      {label !== undefined ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.boxInput, { backgroundColor: bgColor }]}>
        <TextInput
          nativeID={inputWithId}
          placeholder={prompt}
          accessibilityLabel={label || prompt}
          style={styles.field}
          {...rest}
        />
        {icon !== undefined ? icon : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  boxInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  field: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 8,
  },
  label: {
    fontWeight: "600",
    color: "#222",
  },
});
