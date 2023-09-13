import { Platform, StyleSheet, View } from "react-native"

interface HeaderProps {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <View style={styles.header}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
})