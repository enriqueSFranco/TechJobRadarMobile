import { createDrawerNavigator } from '@react-navigation/drawer'
import { ProfileCandidate } from '@/screens/profile-candidate'

// TODO: TIPAR EL DRAWER

const Drawer = createDrawerNavigator()

export function DrawerGroup () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='ProfileCandidate' component={ProfileCandidate} />
    </Drawer.Navigator>
  )
}