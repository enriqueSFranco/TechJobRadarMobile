import { useLayoutEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { JobWithId } from '@/shared'
import { SvgDiscord } from '@/components/icon'
import { Chip } from '@/components/chip'
import { Divider } from '@/components/divider'

type RootStackParamList = {
  TabGroup: undefined
  JobDetail: JobWithId
}

type Props = NativeStackScreenProps<RootStackParamList, 'JobDetail'>['route']

export const JobDetail = () => {
  const { params } = useRoute<Props>()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.title,
    })
  }, [])

  const {
    title,
    category,
    contractType,
    description,
    location,
    maxSalary,
    minSalary,
    totalPlaces
  } = params

  function handleApply () {
    console.log('me postule a la vacante: ', title)
  }

  return (
    <View style={styles.jobDetailsScreen}>
      <View style={{ alignItems: 'center', gap: 10 }}>
        <SvgDiscord />
        <Text style={styles.companyName}>{category}</Text>
        <Text style={styles.jobTitle}>
          {title}
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Chip bgColor='#ededed'>
            <Text style={{ color: '#222', fontSize: 13 }}>{contractType}</Text>
          </Chip>
          <Chip bgColor='#ededed'>
            <Text style={{ color: '#222', fontSize: 13 }}>{contractType}</Text>
          </Chip>
          <Chip bgColor='#ededed'>
            <Text style={{ color: '#222', fontSize: 13 }}>{contractType}</Text>
          </Chip>
        </ScrollView>
      </View>
      {/* TODO: SPACER COMPONENT */}
      <Divider color='#ccc' />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          accessibilityLabel={`Apply for job ${title}`}
          onPress={handleApply}
          style={styles.applyButton}
        >
          <Text style={styles.applyButtonText}>apply now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name='bookmark-outline' size={24} color='#777' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  applyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 4,
  },
  applyButtonText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: 16
  },
  bookmarkButton: {},
  companyName: {
    color: '#777',
    fontWeight: '500'
  },
  descriptionContainer: {
    flex: 1
  },
  descriptionText: {
    lineHeight: 20
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  jobTitle: {
    color: '#222',
    fontSize: 18,
    fontWeight: '500'
  },
  jobDetailsScreen: {
    flex: 1,
    gap: 16,
    backgroundColor: '#fff',
    padding: 16
  }
})
