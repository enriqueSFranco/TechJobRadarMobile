import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, TouchableOpacity, View } from 'react-native'
import { BaseTextInput } from './base-text-input'

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
      {/* <TouchableOpacity>
        <Ionicons name='color-filter-outline' size={22} color='#222' />
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4
  },
})