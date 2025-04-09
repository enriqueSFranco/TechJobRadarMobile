import { useId } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TextInputProps,
} from "react-native";

type TextFieldProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  bgColor?: `#${string}` | string;
  icon?: React.ReactNode;
} & TextInputProps;

export const TextField = ({
  placeholder = "",
  label,
  value,
  bgColor = "#fff",
  icon,
  ...rest
}: TextFieldProps) => {
  const inputWithId = useId();

  return (
    <View style={[styles.box, { gap: label !== undefined ? 8 : 0 }]}>
      {label !== undefined ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.boxInput, { backgroundColor: bgColor }]}>
        <TextInput
          nativeID={inputWithId}
          placeholder={placeholder}
          accessibilityLabel={label || placeholder}
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
    justifyContent: "center",
  },
  boxInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
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
    textTransform: "capitalize",
    fontWeight: "500",
    color: "#222",
  },
});
