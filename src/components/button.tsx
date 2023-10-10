import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { HexadecimalColor } from '@/shared'

type ButtonProps = {
  children?: React.ReactNode
  label?: string
  bgColor?: HexadecimalColor | string
  color?: HexadecimalColor
}

export const Button = ({ label, bgColor = '#222', color = '#fff', children, ...rest }: ButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} {...rest}>
      {children != null ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>{children}</View> : null}
      {label !== undefined ? <Text style={{ color }}>{label}</Text> : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 4
  }
})