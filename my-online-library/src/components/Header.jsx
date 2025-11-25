import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
<NavLink className="navbar-brand" to="/">Online Library</NavLink>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
<span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="nav">
<ul className="navbar-nav ms-auto">
<li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
<li className="nav-item"><NavLink to="/books" className="nav-link">Browse Books</NavLink></li>
<li className="nav-item"><NavLink to="/add" className="nav-link">Add Book</NavLink></li>
</ul>
</div>
</div>
</nav>
)
}