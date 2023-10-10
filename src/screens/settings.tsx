import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@/components/button'
import { Header } from '@/components/header'

export const Settings = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Header>
        <Button label='go back' onPress={() => navigation.goBack()} />
      </Header>
      <Text>Settings</Text>
    </View>
  )
}
