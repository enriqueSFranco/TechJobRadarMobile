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
      <BaseTextInput
        prompt='Game Developer, Frontend Developer, ...'
        icon={<Ionicons name='search' size={22} color='#222' />}
        value={query}
        onChange={handleChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})