import React from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.app}>
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
