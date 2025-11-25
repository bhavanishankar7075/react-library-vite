import React from 'react'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { useSelector } from 'react-redux'

export default function Home() {
  const books = useSelector(s => s.books.list)
  const popular = books.slice(0, 6) // show more on wide screens
  const categories = Array.from(new Set(books.map(b => b.category))).filter(Boolean)

  return (
    <div className="container my-4">
      <div className="hero rounded-3 p-4 mb-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-5 mb-2">Welcome to the Online Library</h1>
            <p className="lead mb-0">Discover books across categories. Add your favorites and explore details.</p>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <Link to="/books" className="btn btn-outline-light btn-lg">Browse All Books</Link>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h5 className="mb-3">Categories</h5>
        <div className="d-flex flex-wrap gap-2">
          {categories.map(c => (
            <Link key={c} to={`/books/${c}`} className="btn btn-sm btn-outline-secondary">{c}</Link>
          ))}
        </div>
      </div>

      <h5 className="mb-3">Popular Books</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {popular.map(b => (
          <div className="col" key={b.id}><BookCard book={b} /></div>
        ))}
      </div>
    </div>
  )
}
