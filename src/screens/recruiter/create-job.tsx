import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import { FormCreateJob } from '@/components/ui/form-create-job'


export const CreateJob = () => {

  return (
    <SafeAreaView style={styles.container}>
      <FormCreateJob />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
