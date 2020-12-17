import React from "react";

const Gallery = ({info}) => {
  // Sort items by their id then map over array to return array of figures and store value in a variable
  const galleryArray = info.sort((a, b) => {
    return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0;
  })
  .map((item) => {
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
      );
    });
  return (
    <div className="gallery">
      {galleryArray}  
    </div>
  );
}

export default Gallery;