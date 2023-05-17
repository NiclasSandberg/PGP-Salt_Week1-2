import React, { SyntheticEvent, useEffect, useState } from 'react'
import { IPuppy } from '../interfaces';
import { addNewPupp } from './api';

interface addPuppieFormProps {
  addNewPuppie: (pup: any) => void;
}

const AddPuppieForm = ({addNewPuppie}:addPuppieFormProps) => {

  const [name, setName] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  

const onFormSubmit = (e: SyntheticEvent) => {
e.preventDefault();

const getPhoto = async (breed:string) => {
  const response1 = await fetch(`https://api.unsplash.com/search/photos?query=${breed}+dog&client_id=HT6MXot1lxxX_egVZ7bLMjyOUwUEOQuIWbJpTNGR2es`);
  const responseData1 = await response1.json();
  console.log(responseData1.results[0].urls.small);
  //setPhotoUrl(responseData1.results[0].urls.small);
  const newPup: Partial<IPuppy> = {
    name: `${name}`,
    breed: `${breed}`,
    photoUrl: `${responseData1.results[0].urls.small}`
  }
  addNewPuppie(newPup);
}


getPhoto(breed);




}

useEffect(() => {
 
},[photoUrl])

  return (
    <>
    <form className='add-puppie-form' onSubmit={onFormSubmit}>
      <input onChange={(e) => {
        setName(e.target.value);
      }} type="text" placeholder='Enter name'/>
      <input onChange={(e) => {
        setBreed(e.target.value);
      }} type="text" placeholder='Enter breed'/>
      
      <button>Add</button>
    </form>
    </>
  )
}

export default AddPuppieForm