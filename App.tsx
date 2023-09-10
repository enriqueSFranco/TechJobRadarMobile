import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { RickAndMortyApp } from './src/screens/RickAndMortyApp'

const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <RickAndMortyApp />
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