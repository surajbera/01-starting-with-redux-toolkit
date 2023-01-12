import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'Learning Redux Toolkit', content: 'I have heard good things about lorem ipsum' },
  { id: '2', title: 'Redux Toolkit Slices', content: 'Slices does simplify all of redux toolkit' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions
export default postsSlice.reducer