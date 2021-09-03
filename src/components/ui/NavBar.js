import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export const NavBar = () => {
  const history = useHistory()

  const handleClickLogout = () => {
    localStorage.removeItem('accessToken')
    history.push('/auth/login')
  }

  return (
    <div className='navbar navbar-dark bg-dark'>
      <Link to='/' className='btn btn-outline-success ms-5'>
        Home
      </Link>
      <Link to='/search' className='btn btn-outline-success '>
        Search
      </Link>

      <button
        onClick={handleClickLogout}
        className='btn btn-danger me-5'
      >
        Logout
      </button>
    </div>
  )
}
