import React from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddFood } from '../screens/AddFood'
import { CaloriesCounter } from '../screens/CaloriesCounter'
import { View } from 'react-native'

type RootStackParamList = {
  'Home': undefined
  'Add Food': undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const CaloriesCounterRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={CaloriesCounter} />
        <Stack.Screen name='Add Food' component={AddFood} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
