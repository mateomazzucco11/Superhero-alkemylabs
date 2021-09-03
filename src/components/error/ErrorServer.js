import React from 'react'

export const ErrorServer = ({setError, error}) => {
  return (
    <div className='contaner form'>
      <p className='text'>There was an error on the server, please try again later</p>
      <button onClick={()=> setError(!error)} className='btn btn-danger'>
        Return
      </button>
    </div>
  )
}
