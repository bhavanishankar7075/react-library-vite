import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function BookDetails(){
const { id } = useParams()
const book = useSelector(s => s.books.list.find(b=>b.id===id))


if(!book) return (
<div className="container my-4">
<h3>Book not found</h3>
<Link to="/books" className="btn btn-secondary mt-2">Back to Browse</Link>
</div>
)


return (
<div className="container my-4">
<h2>{book.title}</h2>
<p className="text-muted">by {book.author}</p>
<p><strong>Category:</strong> {book.category}</p>
<p><strong>Rating:</strong> {book.rating}</p>
<p>{book.description}</p>
<Link to="/books" className="btn btn-secondary mt-2">Back to Browse</Link>
</div>
)
}