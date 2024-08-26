import { Text, View } from "react-native";
import { useState } from "react";
import { TextField } from "@/features/ui/atoms/text-field";
import { styles } from "@/styles/globalStyles";

export default function SignIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>sign in</Text>
      <TextField
        label="Email"
        prompt="user@gmail.com"
        value={email}
        onChangeText={(newText) => setEmail(newText)}
      />
      <TextField
        secureTextEntry={true}
        label="Password"
        prompt="user@gmail.com"
        value={password}
        onChangeText={(newText) => setPassword(newText)}
      />
    </View>
  );
}
