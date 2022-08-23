import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='Nav__container'>
        <div className='Nav__main'>
          <img
            className='Nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png'
            alt='Nav__logo'
          />
        </div>
      </div>
      <div className='Nav__menus-container'>
        <div className='Nav__menus'>
          <div>Characters</div>
          <div>Comics</div>
          <div>Movies</div>
          <div>Creators</div>
        </div>
      </div>
    </div>
  )
}

export default Nav