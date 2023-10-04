import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { store } from './src/redux/store'
import { TrabajaYa } from './src/screens/trabaja-ya'
import { ThemeProvider } from './src/context/ThemeContext'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Provider store={store}>
        <ThemeProvider>
          <TrabajaYa />
        </ThemeProvider>
      </Provider>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff'
  },
})

export default App
