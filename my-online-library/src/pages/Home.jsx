import React from 'react'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { useSelector } from 'react-redux'
import '../styles/Home.css'

export default function Home() {
  const books = useSelector(s => s.books.list)
  const popular = books.slice(0, 8)
  const categories = Array.from(new Set(books.map(b => b.category))).filter(Boolean)

  return (
    <div className="container my-5">
      <section className="home-hero p-4 p-md-5 rounded-4 mb-5 d-flex flex-column flex-lg-row align-items-center">
        <div className="hero-left pe-lg-4">
          <h1 className="hero-title mb-2">Millions of stories. One library.</h1>
          <p className="hero-sub mb-3">Explore curated collections, add your favorites, and keep your library in sync.</p>
          <div className="d-flex gap-2 flex-wrap">
            <Link to="/books" className="btn btn-cta btn-lg">Browse Books</Link>
            <Link to="/add" className="btn btn-outline-cta btn-lg">Add Book</Link>
          </div>
        </div>

        <aside className="hero-right mt-4 mt-lg-0 ms-lg-auto text-center">
          <div className="hero-top-box p-3 rounded-3 shadow-sm">
            <div className="hero-list-title">Top Categories</div>
            <ul className="hero-list mb-0">
              <li><Link to="/books/Fiction" className="hero-list-link">Fiction</Link></li>
              <li><Link to="/books/Non-Fiction" className="hero-list-link">Non-Fiction</Link></li>
              <li><Link to="/books/Sci-Fi" className="hero-list-link">Sci-Fi</Link></li>
            </ul>
            <div className="mt-3">
              <Link to="/books" className="btn btn-sm btn-outline-muted">View all</Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="section-title mb-0">Categories</h5>
          <Link to="/books" className="btn btn-sm btn-outline-secondary">View all</Link>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {categories.length === 0 ? (
            <div className="text-muted small">No categories yet.</div>
          ) : categories.map(c => (
            <Link key={c} to={`/books/${c}`} className="category-chip">{c}</Link>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="section-title mb-0">Popular Picks</h5>
          <Link to="/books" className="btn btn-sm btn-outline-muted">View all books</Link>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {popular.length === 0 ? (
            <div className="col-12">
              <div className="alert alert-info mb-0">No books available. Add your first book!</div>
            </div>
          ) : popular.map(b => (
            <div className="col" key={b.id}><BookCard book={b} /></div>
          ))}
        </div>
      </section>
    </div>
    
  )
}
