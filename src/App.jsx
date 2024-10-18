import { useState } from 'react'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookPage from './pages/BookPAge'

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
          <Route path='/Books' element={ <BookPage /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
