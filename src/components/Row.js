import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import './Row.css'


const Row = ({ fetchUrl, id }) => {

  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(fetchUrl);
    setData(res.data.data.results);
    console.log(data);
  };




  return (
    <section className='row'>
      <h2>title</h2>
      <div className='slider'>
        <div className='slider__arrow-left' onClick={() => document.getElementById(id).scrollLeft -= window.innerWidth - 80}>
          <span className='arrow'>{"<"}</span>
        </div>
        <div id={id} className="row__posters">
          {
            data.map(item =>
              (
                <div key={item.id} className={`row__poster`}>
                  <img
                    key={`image-${item.id}`}
                    className={`row__poster-image`}
                    src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                    alt={item.id}
                  />
                  <p key={`text-${item.id}`} className={`row__poster-desc`}>
                    d
                  </p>
                </div>
              )
            )
          }
        </div>
        <div className='slider__arrow-right' onClick={() => document.getElementById(id).scrollLeft += window.innerWidth - 80}>
          <span className='arrow'>{">"}</span>
        </div>

      </div>


    </section>
  )
}

export default Row