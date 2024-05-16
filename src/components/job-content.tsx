import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from '@/styles/card-job'
import { CardJobLayout } from '@/layouts/card-job'
import { color } from '@/styles/colors'
import { SvgDiscord } from './icon'
import { Job } from '@/shared'

type JobContentProps = {
  data: Job
}

export function JobContent ({ data }: JobContentProps) {
  const { title } = data

  function saveJobHandler (job: Job) {
    console.log('save: ', job)
  }

  return (
    <CardJobLayout>
      {/* <Image source={{ uri: '' }} /> */}
      <SvgDiscord />
      <View style={styles.jobDetail}>
        <Text style={styles.jobText}>{title}</Text>
        <View style={[styles.jobFooter, styles.row]}>
          <Text style={color.gray}>3hr ago</Text>
          <Text style={color.gray}>full time</Text>
          <Text style={color.gray}>other</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => saveJobHandler(data)}>
        <Ionicons name="ios-bookmark-outline" size={22} color="#777" />
      </TouchableOpacity>
    </CardJobLayout>
  )
}
