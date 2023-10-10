import { Pressable } from 'react-native'
import { JobRecommendedContent } from './job-recommended-content'
import { JobWithId } from '@/shared'

type JobRecommendedProps = {
  job: JobWithId
}

export function JobRecommended ({ job }: JobRecommendedProps) {

  function handleRedirect () {
    console.log('job recommended: ', job)
  }


  return (
    <Pressable onPress={handleRedirect}>
      <JobRecommendedContent data={job} />
    </Pressable>
  )
}
