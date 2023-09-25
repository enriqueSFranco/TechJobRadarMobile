import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"
import { Job } from "@/shared"

type Satate = {
  jobs: Job[]
}

const initialState: Satate = {
  jobs: []
}

const recruiterSlice = createSlice({
  name: 'recruiter',
  initialState,
  reducers: {
    createJob: (state, action: PayloadAction<Job>) => {
      console.log('before', current(state))
      const newJob = action.payload
      state.jobs.push(newJob)
      console.log('after', current(state))
    }
  }
})

export default recruiterSlice.reducer