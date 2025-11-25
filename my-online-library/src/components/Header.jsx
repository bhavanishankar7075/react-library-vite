import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-dark shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="brand-logo">📚</span>
          <span className="fw-bold">Online Library</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link px-3">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/books" className="nav-link px-3">Browse Books</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="nav-link px-3 btn btn-outline-light btn-sm rounded-1">Add Book</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
