import { useState } from "react"
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from "react-native"

export const FormSearch = () => {
  const [text, updateText] = useState('')

  function handleChangeText (e: NativeSyntheticEvent<TextInputChangeEventData>) {
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Character name. Ex: Rick Sanchez"
        value={text}
        onChange={handleChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
  }
})