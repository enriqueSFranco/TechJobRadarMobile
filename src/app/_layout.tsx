import { StatusBar } from "expo-status-bar";
import { Text, KeyboardAvoidingView, Platform } from "react-native";
import { ButtonPressable } from "@/components/atoms/button-pressable";
import { TextField } from "@/components/atoms/text-field";

export default function RootLayout () {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        gap: 32,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Sign in</Text>
      <TextField placeholder="Email" />
      <TextField placeholder="Password" secureTextEntry />
      <ButtonPressable
        text="sign in"
        textStyle={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "400",
          textTransform: "capitalize",
        }}
      />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}
