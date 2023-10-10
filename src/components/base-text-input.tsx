import { useId } from 'react'
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, Text, View, TextInputProps } from 'react-native'


type BaseTextInputProps = {
  prompt?: string
  label?: string
  value: string
  icon?: React.ReactNode
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

export const BaseTextInput = ({ prompt = '', label = '', value, icon, onChange, ...rest }: BaseTextInputProps & TextInputProps) => {
  const inputWithId = useId()

  return (
    <View style={[styles.box, { gap: label !== undefined ? 8 : 0 }]}>
      {label !== undefined ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.boxInput}>
        <TextInput
          nativeID={inputWithId}
          placeholder={prompt}
          value={value}
          onChange={onChange}
          accessibilityLabel={label || prompt}
          {...rest}
          style={styles.field}
        />
        {icon !== undefined ? icon : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  boxInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 8
  },
  field: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8
  },
  label: {
    fontWeight: '600',
    color: '#222'
  }
})