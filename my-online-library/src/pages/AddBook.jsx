import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../store/booksSlice'
import { useNavigate } from 'react-router-dom'
import '../styles/AddBook.css'

export default function AddBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    rating: '',
    description: '',
    imageUrl: ''
  })
  const [errors, setErrors] = useState({})

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

  function submit(ev) {
    ev.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length === 0) {
      dispatch(addBook({
        title: form.title.trim(),
        author: form.author.trim(),
        category: form.category.trim(),
        rating: Number(form.rating),
        description: form.description.trim(),
        imageUrl: form.imageUrl.trim()
      }))
      navigate('/books')
    }
  }

  return (
    <div className="container my-4">
      <div className="card shadow-sm rounded-3">
        <div className="card-body">
          <h3 className="mb-3">Add New Book</h3>

          <form onSubmit={submit} noValidate>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Title</label>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={`form-control ${errors.title ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.title}</div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Author</label>
                <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className={`form-control ${errors.author ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.author}</div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Category</label>
                <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={`form-control ${errors.category ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.category}</div>
              </div>

              <div className="col-md-3">
                <label className="form-label">Rating (0–5)</label>
                <input value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} className={`form-control ${errors.rating ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.rating}</div>
              </div>

              <div className="col-md-3">
                <label className="form-label">Image URL (optional)</label>
                <input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} className="form-control" placeholder="https://..." />
              </div>

              <div className="col-12">
                <label className="form-label">Description</label>
                <textarea rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={`form-control ${errors.description ? 'is-invalid' : ''}`}></textarea>
                <div className="invalid-feedback">{errors.description}</div>
              </div>
            </div>

            <div className="mt-4 d-flex gap-2">
              <button className="btn btn-primary">Add Book</button>
              <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/books')}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
