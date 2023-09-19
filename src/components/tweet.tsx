import { Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Tweet as TweetType } from "../shared"
import { TweetContent } from "./tweet-content"

type TweetProps = {
  tweet: TweetType
}

// TODO: PASAR A LOS MODELS
type StackParamList = {
  TabGroup: undefined
  TweetDetail: TweetType // cambiar al modelo Tweet
}

type TweetNavigationProps = NativeStackNavigationProp<StackParamList, 'TweetDetail'>

export const Tweet = ({ tweet }: TweetProps) => {
  const { navigate } = useNavigation<TweetNavigationProps>()

  function handleRedirect () {
    navigate('TweetDetail', tweet)
  }

  return (
    <Pressable onPress={handleRedirect}>
      <TweetContent tweet={tweet} />
    </Pressable>
  )
}
