// src/components/BookCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder-book.jpg' // import the image

export default function BookCard({ book }) {
  const imgSrc = book.imageUrl || placeholder // if book has imageUrl use it, otherwise placeholder

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imgSrc}
        className="card-img-top card-book-img"
        alt={book.title}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted small">{book.author}</p>
        <p className="mt-auto">
          <Link to={`/book/${book.id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </p>
      </div>
    </div>
  )
}
