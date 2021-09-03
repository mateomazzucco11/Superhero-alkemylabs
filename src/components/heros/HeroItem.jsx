import React from 'react'

export const HeroItem = ({
  heros,
  stats,
  appearance,
  setActive,
  active
}) => {
  return (
    <li key={heros.id} className='card mt-4 ms-5 me-5'>
      <img src={heros.image.url} alt={heros.name} className='card-img-top image' />
      <div className='card-body'>
        <h1 className='card-title'>{heros.name}</h1>
        <div className='card-text'>
          <span >INTELLIGENCE: <span className='text-success'>{stats.intelligence}</span></span>
          <span >STRENGTH: <span className='text-success'>{stats.strength}</span></span>
          <span >SPEED: <span className='text-success'>{stats.speed}</span></span>
          <span >DURABILITY: <span className='text-success'>{stats.durability}</span></span>
          <span >POWER: <span className='text-success'>{stats.power}</span></span>
          <span >COMBAT: <span className='text-success'>{stats.combat}</span></span>
        </div>
        <button onClick={() => setActive(!active)} className="btn btn-primary">Appearance</button>
        {
          (active)
          ?
          <div>
            <span >GENDER: <span className='text-success'>{appearance.gender}</span></span>
            <span >RACE: <span className='text-success'>{appearance.race}</span></span>
            <span >HEIGHT: <span className='text-success'>{appearance.height}</span></span>
            <span >WEIGHT: <span className='text-success'>{appearance.weight}</span></span>
            <span >EYE COLOR: <span className='text-success'>{appearance.eyecolor}</span></span>
            <span >HAIR COLOR: <span className='text-success'>{appearance.haircolor}</span></span>
          </div>
          :
          null
        }
      </div>
    </li>
  )
}
