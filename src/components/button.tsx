import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HexadecimalColor } from '@/shared'

type ButtonProps = {
  children?: React.ReactNode
  label: string
  bgColor?: HexadecimalColor
  color?: HexadecimalColor
}

export const Button = ({ label, bgColor = '#222', color = '#fff', children }: ButtonProps) => {
  const buttonWithChildrenClassName = children != null ? '' : ''

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]}>
      {children != null ? <View>{children}</View> : null}
      <Text style={{ color }}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 4
  }
})