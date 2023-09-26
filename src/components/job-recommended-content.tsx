import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SvgDiscord } from '../components/icon'
import { Job } from '../shared'
import { Chip } from './chip'


const KNOWLEDGE_COLORS = {
  javascript: '#F7DF1E',
  react: '#61DAFB',
  nodejs: '#339933'
}

type JobRecommendedContentProps = {
  data: Job
}

export function JobRecommendedContent ({ data }: JobRecommendedContentProps) {
  const { title, location, description, requiredKnowledge } = data

  function handleRedirect (job: Job) {
    console.log('redirect to: ', job)
  }

  return (
    <View style={styles.jobContainer}>
      <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <SvgDiscord />
        <View style={{ gap: 2 }}>
          <Text style={styles.jobText}>{title}</Text>
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

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {requiredKnowledge.map(knowlegde => <Chip key={knowlegde} bgColor={KNOWLEDGE_COLORS[knowlegde.toLocaleLowerCase()] ?? '#eded'}><Text>{knowlegde}</Text></Chip>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  jobContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 10,
  },
  jobText: {
    textTransform: 'capitalize',
    fontWeight: '700',
    color: '#222'
  },
  gray: {
    color: '#222',
    fontSize: 13,
  }
})