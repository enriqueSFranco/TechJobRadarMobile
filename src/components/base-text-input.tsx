import { StyleSheet, TextInput, View } from 'react-native'

type BaseTextInputProps = {
  prompt?: string
}

export const BaseTextInput = ({ prompt }: BaseTextInputProps) => {
  return (
    <View style={styles.box}>
      <TextInput placeholder={prompt} style={{ height: 36, paddingHorizontal: 12 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff'
  }
})