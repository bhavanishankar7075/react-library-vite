import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder-book.jpg'

export default function BookCard({ book }) {
  const imgSrc = book.imageUrl?.trim() ? book.imageUrl : placeholder

  return (
    <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
      <div className="ratio ratio-4x3">
        <img src={imgSrc} alt={book.title} className="card-img-top object-cover" loading="lazy" />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1">{book.title}</h5>
        <p className="text-muted small mb-2">{book.author}</p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Link to={`/book/${book.id}`} className="btn btn-sm btn-primary">View</Link>
          <div className="text-end small text-muted">{book.rating ?? '—'}/5</div>
        </div>
      </div>
    </div>
  )
}
