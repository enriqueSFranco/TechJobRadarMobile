import { getAllJobs } from "@/services/jobs"
import { type Job } from "@/shared"

export const api = {
  list: (): Promise<Job[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getAllJobs())
      }, 1000)
    })
  }
}