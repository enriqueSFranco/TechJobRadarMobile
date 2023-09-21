import { BaseTextInput } from '@/components/base-text-input'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export const CreateJob = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>create job</Text>
      </View>

      <View>
        <BaseTextInput />
      </View>

      <View>
        <BaseTextInput />
      </View>
    </SafeAreaView>
  )
}
