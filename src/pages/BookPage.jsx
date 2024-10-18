import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/bookPage.css'

const BookPage = () => {
  return (
    <div id='book-page'>
        <h3>Here is my selection of books:</h3>
        <NavLink to="/books/add">Add book</NavLink>
        <br></br>
        <NavLink to="/books/1">Book one</NavLink>
        <NavLink to="/books/2">Book two</NavLink>
    </div>
  )
}

export default BookPage