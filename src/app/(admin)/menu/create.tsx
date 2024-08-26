import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { styles as globalStyles } from "@/styles/globalStyles";
import { useStock } from "@/hooks/useStock";
import { Colors } from "@/shared/constants.d";
import { Stack, useLocalSearchParams } from "expo-router";

const INITIAL_PRODUCT_FORM_VALUES: ProductFormValues = {
  name: "",
  price: "",
};

type ProductFormValues = {
  name: string;
  price: string;
};

const urlDefaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export default function Create () {
  const [form, setForm] = useState<ProductFormValues>({
    name: "",
    price: "",
  });
  const [image, setImage] = useState<string | null>(null);
  const { id } = useLocalSearchParams();
  const { createProduct, updateProduct } = useStock();

  const isEditMode = id !== undefined;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) setImage(result.assets[0].uri);
  };

  function handleFormReset () {
    setForm(INITIAL_PRODUCT_FORM_VALUES);
  }

  function handleChangeText<T> (name: string, newText: T) {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: newText,
    }));
  }

  // TODO: implementar la funcion de crear una pizza
  function _handleCreate () {
    const { name, price } = form;
    // validar la información ingrasada por el usuario
    createProduct({ name, price, image });
    handleFormReset();
  }

  function _handleUpdate (id: string) {
    const { name, price } = form;

    // validar la información ingrasada por el usuario
    updateProduct(id);
    // handleFormReset();
  }

  function handleDelete () {
    console.log("DELETE PRODUCT");
  }

  function _confirm () {
    Alert.alert("Confirm", "Are you sure you want to delete this product", [
      { text: "Cancel" },
      { text: "Delete", style: "destructive", onPress: handleDelete },
    ]);
  }

  function handleSubmit () {
    if (isEditMode) {
      _handleUpdate(String(id));
    } else _handleCreate();
  }

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{ title: isEditMode ? "Update Pizza" : "Create Pizza" }}
      />
      <View>
        {/* input for upload image */}
        <Image
          source={{ uri: image ?? urlDefaultPizzaImage }}
          style={{ width: "50%", aspectRatio: 1, alignSelf: "center" }}
        />
        <Button title="Upload foto" onPress={pickImage} />
      </View>

      {/* form */}
      <View style={styles.form}>
        {/* name */}
        <View style={styles.boxInput}>
          <Text>Name</Text>
          <TextInput
            placeholder="Cheesy BBQ"
            style={styles.textField}
            value={form.name}
            onChangeText={(newText) => handleChangeText("name", newText)}
          />
        </View>
        {/* price */}
        <View style={styles.boxInput}>
          <Text>Price ($)</Text>
          <TextInput
            placeholder="9.9"
            keyboardType="numeric"
            style={styles.textField}
            value={form.price}
            onChangeText={(newText) => handleChangeText("price", newText)}
          />
        </View>
        {/* button create */}
        <Pressable onPress={_handleCreate} style={styles.btnCreate}>
          <Text style={styles.btnCreateText}>
            {isEditMode ? "Update" : "Create"}
          </Text>
        </Pressable>
        {isEditMode && (
          <Pressable onPress={_confirm} style={styles.btnCreate}>
            <Text style={styles.btnCreateText}>
              {isEditMode ? "Update" : "Create"}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxInput: {
    width: "100%",
    gap: 10,
    justifyContent: "flex-start",
  },

  btnCreate: {
    width: "100%",
    backgroundColor: Colors.light.tint,
    padding: 8,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCreateText: {
    color: Colors.dark.color,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  form: {
    width: "100%",
    flex: 1,
    gap: 16,
  },

  textField: {
    borderColor: Colors.light.tint,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 6,
  },
});
