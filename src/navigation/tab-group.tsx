import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Application } from '@/screens/candidate/application'
import { Home } from '@/screens/app/home'
import { Settings } from '@/screens/settings'
import { CreateJob } from '@/screens/recruiter/create-job'

type RootStackParamList = {
  Home: undefined
  Application: undefined
  Settings: undefined
  CreateJob: undefined

}

const getIsSignedIn = () => {
  return true
}

const Tab = createBottomTabNavigator<RootStackParamList>()

// TODO: PASAR A UN COMPONENTE
export function TabGroup () {
  const isLogin = getIsSignedIn()
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

        if (name === 'CreateJob') {
          iconName = focused ? 'ios-create' : 'ios-create-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#222',
      tabBarInactiveTintColor: '#777',
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Application" component={Application} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name='CreateJob' component={CreateJob} />
    </Tab.Navigator>
  )
}