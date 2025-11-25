// src/store/booksSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit'
import initialBooks from '../data/books'

// load from localStorage if available
const persisted = (() => {
  try {
    const raw = localStorage.getItem('books')
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed
    return null
  } catch (err) {
    console.warn('Failed to parse books from localStorage:', err)
    return null
  }
})()

const initialState = { list: persisted || initialBooks }

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.list.unshift(action.payload)
        // persist to localStorage whenever we change list
        try {
          localStorage.setItem('books', JSON.stringify(state.list))
        } catch (err) {
          console.warn('Failed to save books to localStorage:', err)
        }
      },
      prepare(book) {
        return { payload: { id: nanoid(), ...book } }
      }
    },
    // optional: remove or edit actions could also persist (example removeBook)
    removeBook(state, action) {
      state.list = state.list.filter(b => b.id !== action.payload)
      try {
        localStorage.setItem('books', JSON.stringify(state.list))
      } catch (err) {
        console.warn('Failed to save books to localStorage:', err)
      }
    }
  }
})

export const { addBook, removeBook } = booksSlice.actions
export default booksSlice.reducer
