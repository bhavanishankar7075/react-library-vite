import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  const loc = useLocation()

  return (
    <div className="container text-center my-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Page not found</p>

      <p className="text-muted">
        The URL <code>{loc.pathname}</code> does not exist.
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Back to Home
      </Link>
    </div>
  )
}
