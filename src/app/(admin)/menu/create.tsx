import { Button, Image, Text, TextInput, View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Pizza } from "@/shared/types.d";

const urlDefaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export default function Create () {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) setImage(result.assets[0].uri);
  };

  // TODO: implementar la funcion de crear una pizza
  function _handleCreate () {
    // validar la información ingrasada por el usuario
    if (!name.trim() || !price.trim()) return;
  }

  return (
    <View>
      <View>
        {/* input for upload image */}
        <Image
          source={{ uri: image ?? urlDefaultPizzaImage }}
          style={{ width: "50%", aspectRatio: 1, alignSelf: "center" }}
        />
        <Button title="Upload foto" onPress={pickImage} />
      </View>

      {/* form */}
      <View>
        {/* name */}
        <View>
          <Text>Name</Text>
          <TextInput
            value={name}
            onChangeText={(newText) => setName(newText)}
          />
        </View>
        {/* price */}
        <View>
          <Text>Price ($)</Text>
          <TextInput
            placeholder="9.9"
            keyboardType="numeric"
            value={price}
            onChangeText={(newText) => setPrice(newText)}
          />
        </View>
        {/* button create */}
        <Button title="Create" onPress={_handleCreate} />
      </View>
    </View>
  );
}
