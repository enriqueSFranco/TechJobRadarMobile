import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Colors } from "@/shared/constants.d";

export default function Layout() {
  return (
    <SafeAreaProvider style={styles.app}>
      <StatusBar style="auto" />
      <Stack />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "#eee",
  },
});
