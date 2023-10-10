import { View } from 'react-native'
import { HexadecimalColor } from '@/shared'
import { styles } from '@/styles/chip'

type ChipProps = {
  children: React.ReactNode
  bgColor?: HexadecimalColor
}

export const Chip = ({ children, bgColor = '#eee' }: ChipProps) => {
  return (
    <View style={[styles.chipContainer, { backgroundColor: bgColor }]}>
      {children}
    </View>
  )
}
