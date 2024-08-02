import { Link, router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>hello world</Text>
      <Link href="/settings">go to settings</Link>
      <Pressable onPress={() => router.push("/settings")}>
        <Text>go to settings with router push</Text>
      </Pressable>
    </View>
  );
}
