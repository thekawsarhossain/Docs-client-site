import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// getting all blogs api called here
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await fetch(
    'https://enigmatic-atoll-27842.herokuapp.com/blogs'
  )
  const data = await response.json()
  console.log(data.reverse())
  return data
})

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    blog: null,
    status: 'idle',
  },

  //  reducers here
  reducers: {
    ADD_TO_BLOG: (state, action) => {
      state.blog = action.payload
    },
    ADD_COMMENT: (state, action) => {
      state.blog.comment.push(action.payload)
    },
  },
  //   extra reducers here for api
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs.push(action.payload)
      state.status = 'success'
    })
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = 'pending'
    })
  },
})

export const { ADD_TO_BLOG, ADD_COMMENT } = blogsSlice.actions
export default blogsSlice.reducer
