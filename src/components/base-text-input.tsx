import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from 'react-native'


type BaseTextInputProps = {
  prompt?: string
  value: string
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

export const BaseTextInput = ({ prompt, value, onChange }: BaseTextInputProps) => {
  return (
    <View style={styles.box}>
      <TextInput
        placeholder={prompt}
        value={value}
        onChange={onChange}
        style={{ height: 36, paddingHorizontal: 12 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center'
  }
})