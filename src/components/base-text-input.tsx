import { StyleSheet, TextInput, View } from 'react-native'

export const BaseTextInput = () => {
  return (
    <View style={styles.box}>
      <TextInput placeholder='Game Developer, Fronted Developer, Data Scient, ...' style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: '#777'
  },
  input: {
    padding: 8
  }
})