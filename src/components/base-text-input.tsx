import { StyleSheet, TextInput, View } from 'react-native'

export const BaseTextInput = () => {
  return (
    <View style={styles.box}>
      <TextInput placeholder='Game Developer, Frontend Developer, ...' style={{ height: 36, paddingHorizontal: 12 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff'
  }
})