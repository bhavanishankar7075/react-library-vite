import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import placeholder from '../assets/placeholder-book.jpg'
import '../styles/BookDetails.css'

function Stars({ value }) {
  const v = Math.max(0, Math.min(5, Number(value) || 0))
  const full = Math.floor(v)
  const half = v - full >= 0.5
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= full) stars.push('full')
    else if (i === full + 1 && half) stars.push('half')
    else stars.push('empty')
  }
  return (
    <div className="bd-stars" aria-hidden>
      {stars.map((s, i) => (
        <span key={i} className={`bd-star bd-star-${s}`}>★</span>
      ))}
      <span className="bd-rating ms-2">{v.toFixed(1)}/5</span>
    </div>
  )
}

export default function BookDetails() {
  const { id } = useParams()
  const book = useSelector(s => s.books.list.find(b => b.id === id))

  if (!book) return (
    <div className="container my-5">
      <div className="notfound-card p-4 rounded-3 text-center shadow-sm">
        <h3 className="mb-3">Book not found</h3>
        <p className="text-muted mb-3">The book you are looking for doesn't exist or has been removed.</p>
        <Link to="/books" className="btn btn-primary">Back to Browse</Link>
      </div>
    </div>
  )

  const img = book.imageUrl?.trim() ? book.imageUrl : placeholder

  return (
    <div className="container my-5">
      <div className="bd-wrapper row g-4">
        <div className="col-lg-4">
          <div className="bd-cover-card shadow-sm">
            <img src={img} alt={book.title} className="bd-cover-img" loading="lazy" />
            <div className="bd-cover-footer d-flex justify-content-between align-items-center p-3">
              <div>
                <div className="bd-price">Free</div>
                <div className="bd-small text-muted">Instant access</div>
              </div>
              <div className="bd-actions d-flex gap-2">
                <button className="btn btn-sm btn-action">Borrow</button>
                <button className="btn btn-sm btn-outline-secondary">Favorite</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="bd-meta p-4 rounded-3 shadow-sm">
            <h2 className="bd-title">{book.title}</h2>
            <p className="bd-author text-muted mb-2">by {book.author}</p>

            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <span className="bd-badge">{book.category || 'Unknown'}</span>
              <span className="bd-badge small">Pages: {book.pages ?? '—'}</span>
              <span className="bd-badge small">Language: {book.language ?? 'EN'}</span>
            </div>

            <Stars value={book.rating} />

            <div className="bd-description mt-4">
              <h6 className="mb-2">About this book</h6>
              <p className="text-muted mb-0" style={{ whiteSpace: 'pre-line' }}>{book.description}</p>
            </div>

            <div className="mt-4 d-flex gap-2">
              <Link to="/books" className="btn btn-outline-muted">View all books</Link>
              <button className="btn btn-primary">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
