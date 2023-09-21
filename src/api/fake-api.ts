import db from '@/api/db.json'
import { type Job } from "@/shared"

const { jobs } = db

export const api = {
  list: (): Promise<Job[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(jobs)
      }, 1000)
    })
  }
}