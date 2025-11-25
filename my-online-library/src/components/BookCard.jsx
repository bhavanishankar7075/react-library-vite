import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder-book.jpg'
import '../styles/BookCard.css'

function Stars({ value }) {
  const v = Math.max(0, Math.min(5, Math.round((value || 0) * 2) / 2))
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(v)) stars.push('full')
    else if (i - 0.5 === v) stars.push('half')
    else stars.push('empty')
  }
  return (
    <div className="star-row" aria-hidden>
      {stars.map((s, idx) => (
        <span key={idx} className={`star star-${s}`}>★</span>
      ))}
    </div>
  )
}

export default function BookCard({ book }) {
  const imgSrc = book.imageUrl?.trim() ? book.imageUrl : placeholder

  return (
    <article className="card h-100 border-0 modern-card">
      <div className="ratio ratio-4x3 card-media">
        <img src={imgSrc} alt={book.title} className="object-cover" loading="lazy" />
      </div>

      <div className="card-body d-flex flex-column">
        <div>
          <h6 className="card-title mb-1">{book.title}</h6>
          <p className="text-muted small mb-2">{book.author}</p>
          <Stars value={book.rating} />
        </div>

        <div className="mt-auto d-flex gap-2 align-items-center">
          <Link to={`/book/${book.id}`} className="btn btn-sm btn-view">View</Link>
          <button type="button" className="btn btn-sm btn-action">Buy</button>
          <div className="ms-auto text-muted small">{book.category}</div>
        </div>
      </div>
    </article>
  )
}
