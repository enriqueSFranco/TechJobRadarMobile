import db from '@/api/db.json'
import { type JobWithId } from "@/shared"

const { jobs } = db

export const api = {
  list: (): Promise<JobWithId[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(jobs)
      }, 1000)
    })
  }
}