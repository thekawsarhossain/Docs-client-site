import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// getting user info from DB
export const fetchUserData = createAsyncThunk(
  'fetchUser/fetchUserData',
  async (email) => {
    const response = await fetch(
      `https://enigmatic-atoll-27842.herokuapp.com/users/${email}`
    )
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
    REMOVE_DATA: (state, action) => {
      state.userInfoFromDB = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userInfoFromDB = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchUserData.pending, (state, action) => {
      state.status = 'pending'
    })
  },
})

export const { ADD_USER, ADD_ERROR, SET_STATUS, REMOVE_USER, REMOVE_DATA } =
  userSlice.actions
export default userSlice.reducer
