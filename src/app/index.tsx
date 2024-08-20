import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index () {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <Link href="/(user)" asChild>
        <Pressable>
          <Text>User</Text>
        </Pressable>
      </Link>
      <Link href="/(admin)" asChild>
        <Pressable>
          <Text>Admin</Text>
        </Pressable>
      </Link>
    </View>
  );
}
