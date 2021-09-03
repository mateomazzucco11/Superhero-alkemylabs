import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { useForm } from '../../hooks/useForm';
import { NavBar } from '../ui/NavBar';
import { HeroItem } from '../heros/HeroItem';


export const SearchScreen = () => {
  const history = useHistory()
  if (localStorage.getItem('accessToken')) {
  } else {
    history.push('/auth/login')
  }
  const token = process.env.REACT_APP_FACEBOOK_TOKEN
  const [ formValue, handleChange ] = useForm({
    search: ''
  })
  const [ heroesFiltered, setHerosFiltered ] = useState({
    data: [],
    loading: true
  })

  const handleSubmit = async(e) => {

    e.preventDefault()

    const searchData = await axios({
      method: 'get',
      url: `/api/${token}/search/${formValue.search}`,
      validateStatus: () => {
        return true;
      }
    })

    if (searchData) {
      setHerosFiltered({
        data: searchData?.data,
        loading: false
      })
    }
  }

  console.log(heroesFiltered.data.results)

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit} className='d-flex mt-3'>
        <input 
          className='form-control me-2'
          type='search'
          name='search'
          placeholder='Search you hero'
          onChange={handleChange}
          value={formValue.search}
        />
        <button type='submit' className='btn btn-outline-success'>
          Search
        </button>
      </form>
      {
        (formValue.search === '')
        ?
        <p>Please provide a hero name</p>
        :
        <div className='col-7'>
          {
            (heroesFiltered.loading)
            ?
              <p>Searching the hero...</p>
            :
            heroesFiltered?.data?.results?.map((data) => {
              return (
                <HeroItem
                  heros={data}
                  stats={data?.powerstats}
                  appearance={data?.appearance}
                />
              )
            })
          } 
        </div>
      }
    </>
  )
}
