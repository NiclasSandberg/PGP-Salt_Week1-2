import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IPuppy } from './interfaces';
import Gallery from './Components/Gallery';


interface thePuppies {
  puppies: IPuppy[],
}

interface PuppiesPhoto {
  urls:any
}

function App() {

  const [puppies, setPuppies] = useState<IPuppy[]>([]);
  const [puppiesPhoto, setPuppiesPhoto] = useState<PuppiesPhoto[]>([]);

  useEffect(() => {

    const getPuppies = async () => {
      const response = await fetch("http://localhost:8080/puppy/puppies")
      const json = await response.json();
      return json;
    }
    const getPhoto = async () => {
      const response1 = await fetch(`https://api.unsplash.com/search/photos?query=labrador+dog&client_id=HT6MXot1lxxX_egVZ7bLMjyOUwUEOQuIWbJpTNGR2es`);
      const responseData1 = await response1.json();
      setPuppiesPhoto(responseData1.results);
    }
    getPuppies().then(setPuppies).then(getPhoto);
  },[])

  return (
    <div className="App">
      <h1>Welcome to the Puppies App!</h1>
      <Gallery puppies={puppies}/>
      {puppiesPhoto && 
    <img src={puppiesPhoto[0].urls.small} alt="" />
      }
    </div>
  );
}

export default App;
