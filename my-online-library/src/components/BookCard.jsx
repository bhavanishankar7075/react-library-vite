import React from 'react'
import { Link } from 'react-router-dom'


export default function BookCard({book}){
return (
<div className="card h-100">
<img src="/src/assets/placeholder-book.jpg" className="card-img-top" alt={book.title} />
<div className="card-body d-flex flex-column">
<h5 className="card-title">{book.title}</h5>
<p className="card-text text-muted small">{book.author}</p>
<p className="mt-auto"><Link to={`/book/${book.id}`} className="btn btn-primary btn-sm">View Details</Link></p>
</div>
</div>
)
}