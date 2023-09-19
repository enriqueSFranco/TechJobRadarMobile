import { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Tweet as TweetType } from '../shared'
import { TweetContent } from '../components/tweet-content'

type StackParamList = {
  TabGroup: undefined
  TweetDetail: TweetType
}

export const TweetDetail = () => {
  const { params } = useRoute<NativeStackScreenProps<StackParamList, 'TweetDetail'>['route']>()
  const navigate = useNavigation()

  useLayoutEffect(() => {
    navigate.setOptions({
      headerTitle: params.author.name
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <TweetContent tweet={params} />
    </View>
  )
}
