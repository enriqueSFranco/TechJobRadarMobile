import { StyleSheet, Text, View } from 'react-native'
import { Thumbnail } from '../components/Thumbnail'
import { Header } from '../components/Header'

interface CaloriesCounterMainLayoutProps {
  children: React.ReactNode
}

const CaloriesCounterMainLayout = ({ children }: CaloriesCounterMainLayoutProps) => {
  return (
    <View>
      <Header>
        <View style={styles.nav}>
          <Text style={styles.username}>Hello, Enrique</Text>
          <Text style={styles.welcome}>Welcome back to your global</Text>
        </View>
        <Thumbnail uri='https://unavatar.io/github/enriqueSFranco' />
      </Header>
      <View style={{ padding: 16, gap: 16 }}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    gap: 4,
  },
  username: {
    fontWeight: '700',
    fontSize: 16,
  },
  welcome: {
    color: '#6c757d',
  }
})

export default CaloriesCounterMainLayout