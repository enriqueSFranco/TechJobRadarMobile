import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Job } from '@/shared'
import { TabGroup } from './tab-group'
import { JobDetail } from '@/screens/job-detail'

// TODO: TIPAR LAS RUTAS DEL STACK NAVIGATOR
type RootStackParamList = {
  TabGroup: undefined
  JobDetail: Job
}

const Stack = createNativeStackNavigator<RootStackParamList>()

// TODO: PASAR A UN COMPONENTE
export function StackGroup () {
  return (
    <Stack.Navigator initialRouteName='TabGroup'>
      <Stack.Screen name='TabGroup' component={TabGroup} />
      <Stack.Screen name='JobDetail' component={JobDetail} />
    </Stack.Navigator>
  )
}