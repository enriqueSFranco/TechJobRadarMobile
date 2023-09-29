import { configureStore } from '@reduxjs/toolkit'
import jobReducer from '@/features/job-slice'
import recruiterReducer from '@/features/recruiter-slice'

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    recruiter: recruiterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch