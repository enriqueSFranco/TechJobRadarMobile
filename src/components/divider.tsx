import { HexadecimalColor } from '@/shared'
import { StyleSheet, View } from 'react-native'

type DividerProps = {
  color?: HexadecimalColor
}

export const Divider = ({ color = '#DDD' }: DividerProps) => {
  return (
    <View style={[styles.divider, { backgroundColor: color }]} />
  )
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth
  }
})