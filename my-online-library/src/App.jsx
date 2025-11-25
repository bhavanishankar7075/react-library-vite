// src/App.jsx
import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
const Home = lazy(() => import('./pages/Home'))
const BrowseBooks = lazy(() => import('./pages/BrowseBooks'))
const BookDetails = lazy(() => import('./pages/BookDetails'))
const AddBook = lazy(() => import('./pages/AddBook'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div style={{padding: 40, textAlign:'center'}}>Loading…</div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
