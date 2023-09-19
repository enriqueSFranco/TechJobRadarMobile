import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SvgDiscord } from './icon'

interface Job {
  id: number
  jobTitle: string
}

type JobContentProps = {
  data: Job
}

export function JobContent ({ data }: JobContentProps) {
  const { jobTitle } = data

  function saveJobHandler (job: Job) {
    console.log('save: ', job)
  }

  return (
    <View style={[styles.jobContainer, styles.row]}>
      {/* <Image source={{ uri: '' }} /> */}
      <SvgDiscord />
      <View style={styles.jobDetail}>
        <Text style={styles.jobText}>{jobTitle}</Text>
        <View style={[styles.jobFooter, styles.row]}>
          <Text style={styles.gray}>3hr ago</Text>
          <Text style={styles.gray}>full time</Text>
          <Text style={styles.gray}>other</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => saveJobHandler(data)}>
        <Ionicons name="ios-bookmark-outline" size={22} color="#777" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  gray: {
    color: '#777',
    fontSize: 13,
  }, // posbibilidad de estilo global
  jobContainer: {
    backgroundColor: '#fff',
    padding: 12,
    gap: 8
  },
  jobText: {
    textTransform: 'capitalize',
    fontWeight: '700',
    color: '#222'
  },
  jobDetail: {
    flexGrow: 1,
    justifyContent: 'space-between',
    gap: 8
  },
  jobFooter: {
    gap: 8,
  },
  row: { flexDirection: 'row' }
})