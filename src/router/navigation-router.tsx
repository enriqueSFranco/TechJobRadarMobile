import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feed } from '../screens/feed'
import { Notifications } from '../screens/notifications'
import { Settings } from '../screens/settings'

const Tab = createBottomTabNavigator()

function TabGroup () {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Feed} />
    </Tab.Navigator>
  )
}

export function NavigationRouter () {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  )
}