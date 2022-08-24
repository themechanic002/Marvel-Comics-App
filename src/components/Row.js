import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import './Row.css'


const Row = ({ fetchUrl }) => {

  useEffect(() => {
    fetchData();
  }, []);
  
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    const res = await axios.get(fetchUrl);
    setData(res.data.data.results);
    console.log(res);
  };



  return (
    <section className='row'>
      <h2>title</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'>{"<"}</span>
        </div>
        <div className="row__posters">
          {
            data.map(item => (
              <img
                key={item.id}
                src={`${item.thumbnail.path}`}
                alt={item.id}
              />
            ))
          }
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'>{">"}</span>
        </div>

      </div>


    </section>
  )
}

export default Row