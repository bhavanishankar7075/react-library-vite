import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import BookCard from '../components/BookCard'

export default function BrowseBooks() {
  const { category } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get('q') || ''
  const books = useSelector(s => s.books.list)

  const filtered = books.filter(b => {
    if (category && b.category !== category) return false
    if (q) {
      const term = q.toLowerCase()
      return b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)
    }
    return true
  })

  return (
    <div className="container my-4">
      <div className="d-flex gap-2 mb-3 flex-column flex-md-row">
        <input defaultValue={q} onChange={(e) => setSearchParams({ q: e.target.value })} placeholder="Search by title or author" className="form-control me-md-2" />
        <div className="d-flex gap-2">
          <Link to="/add" className="btn btn-success">Add Book</Link>
          <Link to="/" className="btn btn-outline-secondary">Home</Link>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {filtered.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning mb-0">No books found.</div>
          </div>
        ) : filtered.map(b => (
          <div className="col" key={b.id}>
            <BookCard book={b} />
          </div>
        ))}
      </div>
    </div>
  )
}
