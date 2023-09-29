import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TrabajaYa } from './src/screens/trabaja-ya'

// import { NavigationRouter } from './src/router/navigation-router'
// import { CaloriesCounterRouter } from './src/router/CaloriesCounterRouter'
// import { FoodProvider } from './src/context/FoodContext'
// import { RickAndMortyRouter } from './src/router/RiackAndMortyRouter'


const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.app}>
      {/* <RickAndMortyRouter /> */}

      {/* <FoodProvider>
        <CaloriesCounterRouter />
      </FoodProvider> */}

      {/* <NavigationRouter /> */}
      <Provider store={store}>
        <TrabajaYa />
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
