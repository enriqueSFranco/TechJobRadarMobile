import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RickAndMortyApp } from '../screens/RickAndMortyApp'
import { CharacterDetails } from '../screens/CharacterDetails'
import { RootStackRiackAndMortyParams } from '../shared'

const Stack = createNativeStackNavigator<RootStackRiackAndMortyParams>()

const routeScreenDefaultOptions = {
  headerStyle: { backgroundColor: '#01aeca' },
  headerTitleStyle: { color: '#fff' }
}

export const RickAndMortyRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={RickAndMortyApp} />
        <Stack.Screen name='Details' options={{ ...routeScreenDefaultOptions, title: 'Rick and Morty' }} component={CharacterDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}