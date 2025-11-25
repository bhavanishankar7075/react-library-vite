import { createSlice, nanoid } from '@reduxjs/toolkit'
import initialBooks from '../data/books'


const booksSlice = createSlice({
name: 'books',
initialState: { list: initialBooks },
reducers: {
addBook: {
reducer(state, action) {
// add new book at beginning
state.list.unshift(action.payload)
},
prepare(book) {
return { payload: { id: nanoid(), ...book } }
}
}
}
})


export const { addBook } = booksSlice.actions
export default booksSlice.reducer