import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'Learning Redux Toolkit', content: 'I have heard good things about lorem ipsum' },
  { id: '2', title: 'Redux Toolkit Slices', content: 'Slices does simplify all of redux toolkit' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions
export default postsSlice.reducer