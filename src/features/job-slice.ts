import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { JobWithId } from '@/shared'
import { api } from '@/api/fake-api'

type JobSliceState = { jobs: JobWithId[] | null, loading: boolean }

const initialState: JobSliceState = {
  jobs: null,
  loading: false
}

// ACTION
export const fetchAllJobs = createAsyncThunk(
  'jobs/getAllJobs',
  async () => {
    const data = await api.list()
    return data
  }
)

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
  },
  extraReducers (builder) {
    builder.addCase(fetchAllJobs.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(fetchAllJobs.fulfilled, (state, action: PayloadAction<JobWithId[]>) => {
        state.loading = false
        state.jobs = action.payload
      }),
      builder.addCase(fetchAllJobs.rejected, (state, action) => {
        state.loading = false
      })
  },
})

export default jobSlice.reducer