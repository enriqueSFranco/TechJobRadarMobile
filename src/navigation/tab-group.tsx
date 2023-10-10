import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Application } from '@/screens/candidate/application'
import { TYPE_USER, User } from '@/shared'
import { Home } from '@/screens/app/home'
import { Settings } from '@/screens/settings'
import { CreateJob } from '@/screens/recruiter/create-job'
import { Login } from '@/screens/login/login'

const DEFAULT_USER_ROLE: User = TYPE_USER.CANDIDATE

const tabConfigs: Record<User, { name: string, component: () => React.JSX.Element }[]> = {
  [User.Candidate]: [{ name: 'Settings', component: Settings }, { name: 'Application', component: Application }],
  [User.Recruiter]: [{ name: 'CreateJob', component: CreateJob }],
  [User.Admin]: []
}

const userTabConfig = tabConfigs[DEFAULT_USER_ROLE] || []

const tabConfig = [
  { name: 'Home', component: Home },
  ...userTabConfig,
  { name: 'Login', component: Login }
]

type RootStackParamList = {
  Home: undefined
  Application: undefined
  Settings: undefined
  CreateJob: undefined
  Login: undefined
}

const Tab = createBottomTabNavigator<RootStackParamList>()

export function TabGroup () {

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

        if (name === 'Login') {
          iconName = focused ? 'log-out' : 'log-in-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#222',
      tabBarInactiveTintColor: '#777',
    })}>
      {tabConfig.map(({ name, component }) => (
        <Tab.Screen key={name} name={name as keyof RootStackParamList} component={component} />
      ))}
    </Tab.Navigator>
  )
}