import { Pressable } from "react-native"
import { JobRecommendedContent } from "./job-recommended-content"

interface Job {
  id: number
  jobTitle: string
}

type JobRecommendedProps = {
  job: Job
}

export function JobRecommended ({ job }: JobRecommendedProps) {

  function handleRedirect () {
    console.log('job recommended: ', job)
  }


  return (
    <JobRecommendedContent data={job} />
    // <Pressable onPress={handleRedirect} style={{ height: 100 }}>
    // </Pressable>
  )
}
