import React, { useEffect, useState } from 'react'
import { IPuppy } from '../interfaces';
import { addNewPupp } from '../Components/api';
import AddPuppieForm from '../Components/AddPuppieForm';
import Gallery from '../Components/Gallery';

interface thePuppies {
    puppies: IPuppy[],
  }
  
  interface PuppiesPhoto {
    urls?: string
  }

const Home = () => {

    const [puppies, setPuppies] = useState<IPuppy[]>([]);
  const [puppiesPhoto, setPuppiesPhoto] = useState<PuppiesPhoto[]>([]);

  const addNewPuppie = async (newPup: thePuppies) => {
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
  }, [puppies])

  return (
    <>
    <h1>Welcome puppy explorer!</h1>
    <AddPuppieForm addNewPuppie={addNewPuppie} />
    <Gallery puppies={puppies} />
    </>
  )
}

export default Home