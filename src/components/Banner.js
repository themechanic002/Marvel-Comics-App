import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='Banner__container'>
      <div className='Banner__character'>
        <img className='Banner__characterImg'
          src='https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg'
          alt='Banner__characterImg'
        />
      </div>
      <div className='Banner__welcome'>
        <h1>Doctor Strange welcomes you!</h1>
        <div>Enjoy in MARVEL world. All you need is here!</div>
      </div>
    </div>
  )
}

export default Banner