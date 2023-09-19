import React from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { Home } from './src/screens/home'
import { Application } from './src/screens/application'

// import { NavigationRouter } from './src/router/navigation-router'
// import { CaloriesCounterRouter } from './src/router/CaloriesCounterRouter'
// import { FoodProvider } from './src/context/FoodContext'
// import { RickAndMortyRouter } from './src/router/RiackAndMortyRouter'

const Tab = createBottomTabNavigator()

function TabGroup () {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const { name } = route
        let iconName

        if (name === 'Home') {
          iconName = focused ? 'ios-home-sharp' : 'ios-home-outline'
        }
        if (name === 'Application') {
          iconName = focused ? 'briefcase-sharp' : 'briefcase-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#09f',
      tabBarInactiveTintColor: '#777'
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Application" component={Application} />
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
        <TabGroup />
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
