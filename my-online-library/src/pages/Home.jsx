import React from 'react'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { useSelector } from 'react-redux'


export default function Home(){
const books = useSelector(s => s.books.list)
const popular = books.slice(0,3)
const categories = Array.from(new Set(books.map(b=>b.category)))


return (
<div className="container my-4">
<div className="jumbotron p-4 bg-light rounded-3">
<h1>Welcome to the Online Library</h1>
<p className="lead">Find great books across categories.</p>
</div>


<div className="mb-4">
<h4>Categories</h4>
<div>
{categories.map(c => (
<Link key={c} to={`/books/${c}`} className="btn btn-outline-secondary btn-sm me-2 mb-2">{c}</Link>
))}
</div>
</div>


<h4>Popular Books</h4>
<div className="row g-3">
{popular.map(b => (
<div className="col-md-4" key={b.id}><BookCard book={b} /></div>
))}
</div>
</div>
)
}