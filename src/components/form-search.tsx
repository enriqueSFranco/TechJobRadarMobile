import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, TouchableOpacity, View } from 'react-native'
import { BaseTextInput } from './base-text-input'

export const FormSearch = () => {
  const [text, updateText] = useState('')

  function handleChangeText (e: NativeSyntheticEvent<TextInputChangeEventData>) {
  }

  return (
    <View style={styles.container}>
      <Ionicons name='search' size={22} color='#222' />
      <BaseTextInput prompt='Game Developer, Frontend Developer, ...' />
      <TouchableOpacity>
        <Ionicons name='color-filter-outline' size={22} color='#222' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8
  },
})