import React, { useState, useEffect } from 'react'
import getHeros from '../../helpers/getHeros';
import { HeroItem } from './HeroItem';

export const HeroCard = ({id}) => {
  const [active, setActive] = useState(false);
  const [heros, setHeros] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getHeros(id)
      .then(res => {
        setHeros({
          data: res?.data,
          loading: false
        })
      })
      
  }, [id])

  const appearance = heros?.data?.appearance
  const stats = heros?.data?.powerstats
  const herosDes = heros?.data

  return (
    <>
      {
        (heros.loading)
        ?
        <p>Loading...</p>
        :
        <HeroItem 
          heros={herosDes}
          stats={stats}
          appearance={appearance}
          active={active}
          setActive={setActive}
        />
      }
    </>

  )
}

