import React from "react";

const Gallery = ({props}) => {
  return (
    <div>
      <div className="gallery">
        {/* Map over array and output to DOM */}
        {props.map((item) => {
          return (
            <a key={item.id} className="link" href={item.wiki} target='_blank' rel='noreferrer'>
              <figure className='card'>
                <img className='image' src={`https://anime-characters-api.herokuapp.com/images/${item.nameQuery}.jpg`} alt={item.nameQuery}/>
                <figcaption>
                  <h2>{item.name}</h2>
                  <p>{item.role}</p>
                </figcaption>
              </figure>
            </a>
          )
        })}  
      </div>
   </div>
  )
}

export default Gallery;