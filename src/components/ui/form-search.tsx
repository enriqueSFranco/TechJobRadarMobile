import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, TouchableOpacity, View } from 'react-native'
import { BaseTextInput } from '../base-text-input'

export const FormSearch = () => {
  const [query, updateQuery] = useState<string>('')

  function handleChangeText (e: NativeSyntheticEvent<TextInputChangeEventData>) {
    updateQuery(e.nativeEvent.text)
  }

  return (
    <View style={styles.container}>
      <Ionicons name='search' size={22} color='#222' />
      <BaseTextInput
        prompt='Game Developer, Frontend Developer, ...'
        value={query}
        onChange={handleChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})