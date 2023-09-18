import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Feed } from '../screens/feed'
import { Notifications } from '../screens/notifications'
import { Settings } from '../screens/settings'

type AppStackParamList = {
  Feed: undefined
  Notifications: undefined
  Settings: undefined
}

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator<AppStackParamList>()

function StackGroup () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabGroup" component={TabGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function TabGroup () {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        const { name } = route
        let iconName

        if (name === 'Feed') {
          iconName = focused ? 'ios-home-sharp' : 'ios-home-outline'
        } else if (name === 'Notifications') {
          iconName = focused ? 'notifications-sharp' : 'notifications-outline'
        } else if (name === 'Settings') {
          iconName = focused ? 'settings-sharp' : 'settings-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      }
    })}>
      <Tab.Screen name='Feed' component={Feed} />
      <Tab.Screen name='Notifications' component={Notifications} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}

export function NavigationRouter () {
  return (
    <NavigationContainer>
      <StackGroup />
    </NavigationContainer>
  )
}