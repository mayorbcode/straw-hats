import './App.css';
import React, { useState, useEffect } from 'react';
import Gallery from '../gallery/Gallery';

function App() {
  let [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch Data
    fetch('https://anime-characters-api.herokuapp.com/api/v0/onepiece')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setInfo(data) 
    })
    // Switch isLoading to false once fetch is done
    setIsLoading(false);
  }, []);

  return (
    <>
      <h1>Straw Hat Pirates</h1>
      {isLoading ? <h1>Loading...</h1> :
      <Gallery props={info}/>
    }
    </>
  );
}

export default App;
