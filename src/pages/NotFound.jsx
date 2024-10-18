import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigateHome = useNavigate()

  useEffect(()=> {
    setTimeout(() => {
        navigateHome("/")
    }, 1000)
  }, [])
  return (
    <div>NotFound</div>
  )
}

export default NotFound