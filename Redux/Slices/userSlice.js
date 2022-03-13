import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// getting user info from DB
export const fetchUserData = createAsyncThunk(
  'fetchUser/fetchUserData',
  async (email) => {
    const response = await fetch(`http://localhost:5000/users/${email}`)
    const data = await response.json()
    return data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    userInfoFromDB: null,
    error: '',
    status: false,
  },

  //  reducers here
  reducers: {
    ADD_USER: (state, action) => {
      state.currentUser = action.payload
      state.error = ''
    },
    ADD_ERROR: (state, action) => {
      state.error = action.payload
    },
    SET_STATUS: (state, action) => {
      state.status = action.payload
    },
    REMOVE_USER: (state, action) => {
      state.currentUser = action.payload
      state.userInfoFromDB = null
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userInfoFromDB = action.payload
      state.status = true
    })
    builder.addCase(fetchUserData.pending, (state, action) => {
      state.status = false
    })
  },
})

export const { ADD_USER, ADD_ERROR, SET_STATUS, REMOVE_USER } =
  userSlice.actions
export default userSlice.reducer
