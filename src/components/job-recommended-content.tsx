import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SvgDiscord } from '../components/icon'
import { Job } from '../shared'

type JobRecommendedContentProps = {
  data: Job
}

export function JobRecommendedContent ({ data }: JobRecommendedContentProps) {
  const { jobTitle, location, description } = data

  function handleRedirect (job: Job) {
    console.log('redirect to: ', job)
  }

  return (
    <View style={styles.jobContainer}>
      <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <SvgDiscord />
        <View style={{ gap: 2 }}>
          <Text style={styles.jobText}>{jobTitle}</Text>
          <Text style={styles.gray}>{location}</Text>
        </View>
        <TouchableOpacity onPress={() => handleRedirect(data)}>
          <Ionicons name="ios-bookmark-outline" size={22} color="#777" />
        </TouchableOpacity>
      </View>
      {/* details */}
      <View style={{ width: 250, height: 80, overflow: 'hidden' }}>
        <Text numberOfLines={3} ellipsizeMode='tail' style={{ color: '#222' }}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  jobContainer: {
    backgroundColor: '#fff',
    padding: 12,
    height: '100%',
    borderRadius: 10,
  },
  jobText: {
    textTransform: 'capitalize',
    fontWeight: '700',
    color: '#222'
  },
  gray: {
    color: '#777',
    fontSize: 13,
  }
})