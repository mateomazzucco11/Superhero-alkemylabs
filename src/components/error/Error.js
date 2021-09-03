import React from 'react'

export const Error = ({setError, error}) => {
  return (
    <div className='contaner form'>
      <p className='text'>The email or password is incorrect.</p>
      <button onClick={()=> setError(!error)} className='btn btn-danger'>
        Return
      </button>
    </div>
  )
}
