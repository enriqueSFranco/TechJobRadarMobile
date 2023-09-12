import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { RickAndMortyRouter } from './src/router/RiackAndMortyRouter'

const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <RickAndMortyRouter />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 30 : 0
  },
})

export default App