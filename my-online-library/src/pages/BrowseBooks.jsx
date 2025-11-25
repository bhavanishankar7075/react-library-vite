import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import BookCard from '../components/BookCard'


export default function BrowseBooks(){
const { category } = useParams()
const [searchParams, setSearchParams] = useSearchParams()
const q = searchParams.get('q') || ''
const books = useSelector(s => s.books.list)


const filtered = books.filter(b => {
if (category && b.category !== category) return false
if (q) {
const term = q.toLowerCase()
return b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)
}
return true
})


return (
<div className="container my-4">
<div className="d-flex mb-3">
<input defaultValue={q} onChange={(e)=> setSearchParams({ q: e.target.value })} placeholder="Search by title or author" className="form-control me-2" />
<Link to="/add" className="btn btn-success">Add Book</Link>
</div>


<div className="row g-3">
{filtered.length === 0 ? (
<div className="col-12">No books found.</div>
) : (
filtered.map(b => <div className="col-md-4" key={b.id}><BookCard book={b} /></div>)
)}
</div>
</div>
)
}