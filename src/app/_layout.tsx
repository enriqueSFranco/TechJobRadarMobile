import { StatusBar } from "expo-status-bar";
import { Text, KeyboardAvoidingView, Platform } from "react-native";
import { ButtonPressable } from "@/components/atoms/button-pressable";
import { TextField } from "@/components/atoms/text-field";
import { useState } from "react";

export default function RootLayout() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChangeText({ name, value }: { name: string; value: string }) {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function onSignIn() {
    const {email, password} = form;

    if (email.trim() === "" || password.trim() === "") return

    // TODO: Hacer el login
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        gap: 16,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Sign in</Text>
      {/* TODO: Aplicar un debounce */}
      <TextField
        placeholder="kirito@gmail.com"
        label="email"
        autoFocus
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
        value={form.email}
        onChangeText={(newText) =>
          handleChangeText({ name: "email", value: newText })
        }
      />
      <TextField
        placeholder="Enter your password"
        label="password"
        secureTextEntry
        value={form.password}
        onChangeText={(newText) =>
          handleChangeText({ name: "password", value: newText })
        }
      />
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
