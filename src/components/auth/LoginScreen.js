import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './LoginScreen.css'

import { Error } from '../error/Error';
import { ErrorServer } from '../error/ErrorServer';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const history = useHistory()
  const [ error, setError ] = useState(false)
  const [ errorServer, setErrorServer ] = useState(false)
  const [ formValues, handleInputChange ] = useForm({
    email:'',
    password: ''
  })

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const fetchLogin = await axios({
        method: 'post',
        url: 'http://challenge-react.alkemy.org/',
        data: {
          email: formValues.email,
          password: formValues.password
        },
        validateStatus: () => {
          return true;
        }
      })

      if(fetchLogin.data.token){
        localStorage.setItem('accessToken', fetchLogin.data.token);
        history.push('/')
      }else {
        setError(true)
      }
    }
    catch{
      setErrorServer(true)
    }
  }

  return (
    <>
      {
        (error)
        ?
        null
        :
        <div className='container'>
          <form onSubmit={handleSubmit} className='login-form'>
            <div className='control-group'>
              <div className='input-prepend'>
                <span className='add-on'><i className='icon-user'/></span>
                <input
                  autoComplete='off'
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='control-group'>
              <div className='input-prepend'>
                <span className='add-on'><i className='icon-lock'/></span>
                <input 
                  autoComplete='off'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  value={formValues.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='control-group'>
              <button type='submit' className='btn btn-primary btn-large btn-block'>
                Login
              </button>
            </div>
          </form>
        </div>
      }
      {
        (error)
        ?
        <Error setError={setError} error={error}/>
        :
        null
      }
      {
        (errorServer)
        ?
        <ErrorServer setError={setError} error={error}/>
        :
        null
      }
    </>
  )
}
