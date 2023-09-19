import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { Feed } from '../screens/feed'
import { Notifications } from '../screens/notifications'
import { Settings } from '../screens/settings'
import { TweetDetail } from '../screens/tweet-detail'
import { Tweet } from '../shared'

type StackParamList = {
  TabGroup: undefined
  TweetDetail: Tweet
}

type TabGroupStackParamList = {
  Feed: undefined
  Notifications: undefined
  Settings: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

const Tab = createBottomTabNavigator<TabGroupStackParamList>()

const Drawer = createDrawerNavigator()

function StackGroup () {

  return (
    <Stack.Navigator initialRouteName='TabGroup'>
      <Stack.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
      <Stack.Screen name='TweetDetail' component={TweetDetail} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  )
}

// function DrawerGroup () {
//   <Drawer.Navigator>
//     <Drawer.Screen name='' component={} />
//   </Drawer.Navigator>
// }

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