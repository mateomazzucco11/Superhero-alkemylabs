import React from 'react';
import { useHistory } from 'react-router-dom';


import { NavBar } from '../ui/NavBar';
import { HeroCard } from './HeroCard';

export const HeroScreen = () => {
  const history = useHistory();

  if (localStorage.getItem('accessToken')) {
  } else {
    history.push('/auth/login')
  }

  return (
    <>
      <NavBar />
      
      <div className='row row-cols-1 row-cols-md-2 g-5'>
        <ul className='col'>
          <HeroCard id={14} />
          <HeroCard id={52} />
          <HeroCard id={37} />
          <HeroCard id={433} />
          <HeroCard id={93} />
          <HeroCard id={126} />
        </ul>
        <ul className='col'>
          <HeroCard id={66} />
          <HeroCard id={245} />
          <HeroCard id={342} />
          <HeroCard id={144} />
          <HeroCard id={43} />
          <HeroCard id={25} />
        </ul>
      </div>
    </>
  )
}
