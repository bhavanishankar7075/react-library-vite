import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../store/booksSlice'
import { useNavigate } from 'react-router-dom'

export default function AddBook() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // form state
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    rating: '',
    description: ''
  })

  // validation errors
  const [errors, setErrors] = useState({})

  // validate form fields
  function validate(values) {
    const e = {}

    if (!values.title) e.title = 'Title is required'
    if (!values.author) e.author = 'Author is required'
    if (!values.category) e.category = 'Category is required'

    if (!values.rating || isNaN(Number(values.rating)) || Number(values.rating) < 0 || Number(values.rating) > 5) {
      e.rating = 'Rating must be a number between 0 and 5'
    }

    if (!values.description) e.description = 'Description is required'

    return e
  }

  // submit form
  function submit(e) {
    e.preventDefault()

    const v = validate(form)
    setErrors(v)

    if (Object.keys(v).length === 0) {
      dispatch(addBook({
        title: form.title,
        author: form.author,
        category: form.category,
        rating: Number(form.rating),
        description: form.description
      }))

      navigate('/books')  // redirect to Browse Books
    }
  }

  return (
    <div className="container my-4">
      <h3>Add Book</h3>

      <form onSubmit={submit} noValidate>

        {/* Title */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.title}</div>
        </div>

        {/* Author */}
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className={`form-control ${errors.author ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.author}</div>
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.category}</div>
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label className="form-label">Rating (0–5)</label>
          <input
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
            className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.rating}</div>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          ></textarea>
          <div className="invalid-feedback">{errors.description}</div>
        </div>

        <button className="btn btn-primary">Add Book</button>

      </form>
    </div>
  )
}
