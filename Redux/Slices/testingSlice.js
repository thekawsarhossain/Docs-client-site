import { createSlice } from '@reduxjs/toolkit'

const testingSlice = createSlice({
  name: 'testing',
  initialState: {
    allData: ['Hello There'],
  },

  //  reducers here
  reducers: {},
  extraReducers: (builder) => {},
})

export default testingSlice.reducer
