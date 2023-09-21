import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { JobContent } from './job-content'
import { Job as JobType } from '../shared'

type JobProps = {
  job: JobType
}

// TODO: PASAR AL ARCHIVO MODELS
type RootStackParamList = {
  TabGroup: undefined
  JobDetail: JobType
}

type Props = NativeStackNavigationProp<RootStackParamList, 'JobDetail'>


export function Job ({ job }: JobProps) {
  const navigation = useNavigation<Props>()

  function handleRedirect () {
    navigation.navigate('JobDetail', job)
  }


  return (
    <Pressable onPress={handleRedirect}>
      <JobContent data={job} />
    </Pressable>
  )
}