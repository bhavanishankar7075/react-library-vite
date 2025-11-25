import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import placeholder from '../assets/placeholder-book.jpg'
import '../styles/BookDetails.css'

export default function BookDetails() {
  const { id } = useParams()
  const book = useSelector(s => s.books.list.find(b => b.id === id))

  if (!book) return (
    <div className="container my-4">
      <h3>Book not found</h3>
      <Link to="/books" className="btn btn-secondary mt-2">Back to Browse</Link>
    </div>
  )

  const img = book.imageUrl?.trim() ? book.imageUrl : placeholder

  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <img src={img} alt={book.title} className="card-img-top object-cover" style={{height: 350}} />
          </div>
        </div>

        <div className="col-lg-8">
          <h2>{book.title}</h2>
          <p className="text-muted mb-1">by {book.author}</p>
          <div className="mb-2"><strong>Category:</strong> {book.category}</div>
          <div className="mb-3"><strong>Rating:</strong> {book.rating ?? '—'}/5</div>
          <p>{book.description}</p>
          <Link to="/books" className="btn btn-secondary mt-3">Back to Browse</Link>
        </div>
      </div>
    </div>
  )
}
