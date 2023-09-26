import { StyleSheet, Text, View } from 'react-native'
import { HexadecimalColor } from '@/shared'

type ChipProps = {
  children: React.ReactNode
  bgColor: HexadecimalColor
}

export const Chip = ({ children, bgColor }: ChipProps) => {
  return (
    <View style={[styles.chipContainer, { backgroundColor: bgColor }]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  chipContainer: {
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6
  }
})