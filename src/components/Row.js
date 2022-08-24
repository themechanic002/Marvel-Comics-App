import React from 'react'
import './Row.css'

const Row = () => {
  return (
    <section className='row'>
      <h2>title</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'>{"<"}</span>
        </div>
        <div className="row__posters">
          
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'>{">"}</span>
        </div>

      </div>


    </section>
  )
}

export default Row