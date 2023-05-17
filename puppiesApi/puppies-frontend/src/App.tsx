import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IPuppy } from './interfaces';
import Gallery from './Components/Gallery';
import { addNewPupp } from './Components/api';
import AddPuppieForm from './Components/AddPuppieForm';


interface thePuppies {
  puppies: IPuppy[],
}

interface PuppiesPhoto {
  urls?:string
}

function App() {

  const [puppies, setPuppies] = useState<IPuppy[]>([]);
  const [puppiesPhoto, setPuppiesPhoto] = useState<PuppiesPhoto[]>([]);

  const addNewPuppie = async (newPup: Partial<thePuppies>) => {
    const puppie = await addNewPupp(newPup);
    setPuppies([...puppies, puppie]);
   
  }


  useEffect(() => {

    const getPuppies = async () => {
      const response = await fetch("http://localhost:8080/puppy/puppies")
      const json = await response.json();
      setPuppies(json);
    }
    
    getPuppies();
  },[puppies])
  


  return (
    <div className="App">
      <h1>Welcome to the Puppies App!</h1>
      <AddPuppieForm addNewPuppie={addNewPuppie} />
      <Gallery puppies={puppies} />
      
    </div>
  );
}

export default App;
