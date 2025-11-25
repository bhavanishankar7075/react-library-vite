import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top header-light">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="brand-logo">📚</span>
          <span className="fw-bold brand-name">Online Library</span>
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
              <NavLink
                end
                to="/"
                className={({ isActive }) => `nav-link px-3 header-link ${isActive ? 'active-link' : ''}`}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/books"
                className={({ isActive }) => `nav-link px-3 header-link ${isActive ? 'active-link' : ''}`}
              >
                Browse
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/add"
                className={({ isActive }) => `ms-2 px-2 py-1 d-inline-block add-btn ${isActive ? 'active-add' : ''}`}
              >
                Add Book
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
