import { Pressable } from "react-native"
import { JobContent } from "./job-content"
import { Job as JobType } from "../shared"

type JobProps = {
  job: JobType
}

export function Job ({ job }: JobProps) {

  function handleRedirect () {
    console.log('view: ', job)
  }

  return (
    <Pressable onPress={handleRedirect}>
      <JobContent data={job} />
    </Pressable>
  )
}