import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, Text, View, TextInputProps } from 'react-native'


type BaseTextInputProps = {
  prompt?: string
  label?: string
  value: string
  icon?: React.ReactNode
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

export const BaseTextInput = ({ prompt, label, value, icon, onChange, ...rest }: BaseTextInputProps & TextInputProps) => {
  return (
    <View style={[styles.box, { gap: label !== undefined ? 8 : 0 }]}>
      {label !== undefined ? <Text>{label}</Text> : null}
      <TextInput
        placeholder={prompt}
        value={value}
        onChange={onChange}
        {...rest}
        style={{ borderWidth: 0.5, borderColor: '#777', borderRadius: 4, paddingVertical: 14, paddingHorizontal: 8 }}
      />
      {icon !== undefined ? icon : null}
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
})