import React from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {
    // This is a hook
    const { id } = useParams()

  return (
    <div>
        <h2>{id}</h2>
        <p>Description</p>
    </div>
  )
}

export default Book