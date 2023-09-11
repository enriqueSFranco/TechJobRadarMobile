import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackRiackAndMortyParams } from './src/shared'
import { RickAndMortyApp } from './src/screens/RickAndMortyApp'
import { CharacterDetails } from './src/screens/CharacterDetails'

const Stack = createNativeStackNavigator<RootStackRiackAndMortyParams>()

const routeScreenDefaultOptions = {
  headerStyle: { backgroundColor: '#01aeca' },
  headerTitleStyle: { color: '#fff' }
}

const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={RickAndMortyApp} />
          <Stack.Screen name='Details' options={{ ...routeScreenDefaultOptions, title: 'Rick and Morty' }} component={CharacterDetails} />
        </Stack.Navigator>
      </NavigationContainer>
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