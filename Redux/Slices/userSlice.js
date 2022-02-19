import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// for api call
// const fetchTestingData = createAsyncThunk(
//   'testing/fetchTestingData',
//   async () => {
//     const response = await fetch('link')
//     const data = response.json()
//     return response.data
//   }
// )

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    error: '',
    status: true,
  },

  //  reducers here
  reducers: {
    ADD_USER: (state, action) => {
      state.currentUser = action.payload
    },
    ADD_ERROR: (state, action) => {
      state.error = action.payload
    },
    SET_STATUS: (state, action) => {
      state.status = action.payload
    },
    REMOVE_USER: (state, action) => {
      state.currentUser = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchTestingData.fulfilled, (state, action) => {
  //     state.allData.push(action.payload)
  //     state.status = 'success'
  //   })
  //   builder.addCase(fetchTestingData.pending, (state, action) => {
  //     state.status = 'pending'
  //   })
  // },
})

export const { ADD_USER, ADD_ERROR, SET_STATUS, REMOVE_USER } =
  userSlice.actions
export default userSlice.reducer
