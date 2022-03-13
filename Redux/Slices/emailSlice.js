import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// getting all blogs api called here
export const fetchEmails = createAsyncThunk('emails/fetchEmails', async () => {
  const response = await fetch('http://localhost:5000/emails')
  const data = await response.json()
  return data
})

const emailSlices = createSlice({
  name: 'emails',
  initialState: {
    emails: null,
    email: null,
    status: false,
    error: '',
  },

  //  reducers here
  reducers: {
    ADD_TO_EMAIL: (state, action) => {
      state.email = action.payload
      state.error = ''
    },
  },
  //   extra reducers here for api
  extraReducers: (builder) => {
    builder.addCase(fetchEmails.fulfilled, (state, action) => {
      state.emails = action.payload
      state.status = true
      state.error = ''
    })
    builder.addCase(fetchEmails.pending, (state, action) => {
      state.status = false
      state.error = 'there is an error with emails'
    })
  },
})

export const { ADD_TO_EMAIL } = emailSlices.actions
export default emailSlices.reducer
