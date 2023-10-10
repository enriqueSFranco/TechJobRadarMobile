import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header } from '@/components/header'
import { Button } from '@/components/button'

export const ProfileCandidate = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Header>
        <Button label='go back' onPress={() => navigation.goBack()} />
      </Header>
      <Text>profile candidate</Text>
    </SafeAreaView>
  )
}
