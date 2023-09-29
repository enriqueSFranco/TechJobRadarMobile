import { View } from 'react-native'
import { styles } from '../styles/card-job-layout-styles'

type CardJobLayoutProps = {
  children: React.ReactNode
}

export const CardJobLayout = ({ children }: CardJobLayoutProps) => {
  return (
    <View style={[styles.container, styles.row]}>
      {children}
    </View>
  )
}
