import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import './Row.css'


const Row = ({ fetchUrl, id, tag }) => {

  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(fetchUrl);
    const charactersArray = res.data.data.results;
    var characters = [];

    charactersArray.filter(char => 
      char.events.available > 0
    );

    charactersArray.map((char) => {
      if (char.events.available > 0) {
        char.events.items.map((item) => {
          if (item.name.includes('venger')) {
            if(!characters.includes(char)){
              characters.push(char);
            }
            return;
          }
        })
      } else return;
    });
    setData(characters);

  };


  console.log(data);

  return (
    <section className='row'>
      <h2>{tag}</h2>
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
                  {`${item.name}`}
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