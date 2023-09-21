import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store/index'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Home } from './src/screens/home'
import { Settings } from './src/screens/settings'
import { Application } from './src/screens/application'

// import { NavigationRouter } from './src/router/navigation-router'
// import { CaloriesCounterRouter } from './src/router/CaloriesCounterRouter'
// import { FoodProvider } from './src/context/FoodContext'
// import { RickAndMortyRouter } from './src/router/RiackAndMortyRouter'

const Tab = createBottomTabNavigator()

function TabGroup () {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        const { name } = route
        let iconName

        if (name === 'Home') {
          iconName = focused ? 'ios-home-sharp' : 'ios-home-outline'
        }
        if (name === 'Application') {
          iconName = focused ? 'ios-briefcase-sharp' : 'ios-briefcase-outline'
        }

        if (name === 'Settings') {
          iconName = focused ? 'ios-settings-sharp' : 'ios-settings-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#222',
      tabBarInactiveTintColor: '#777',
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Application" component={Application} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <RickAndMortyRouter /> */}

      {/* <FoodProvider>
        <CaloriesCounterRouter />
      </FoodProvider> */}

      {/* <NavigationRouter /> */}
      <NavigationContainer>
        <Provider store={store}>
          <TabGroup />
        </Provider>
      </NavigationContainer>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#e9ecef'
  },
})

export default App
