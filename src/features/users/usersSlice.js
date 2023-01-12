import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: 'Suraj Bera' },
  { id: 2, name: 'Rohit Lad' },
  { id: 3, name: 'Rushabh Sheth' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer