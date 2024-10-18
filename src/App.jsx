import { useState } from 'react'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookPage from './pages/BookPAge'
import Book from './components/Book'
import AddBook from './components/AddBook'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <header>
        <h1>React router example</h1>
        <ul id='navigation-menu'>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          {/* This way you can do nested Routes, I got a bug doing it so will comment it out
            <Route path='/books'>
            <Route index element={ <BookPage /> } />
            <Route path='/add' element={ <AddBook /> } />
            <Route path=':id' element={ <Book />} />
          </Route> */}
          <Route path='/Books' element={ <BookPage /> } />
          <Route path='/Books/:id' element={ <Book /> } />
          <Route path='/Books/add' element={ <AddBook /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
