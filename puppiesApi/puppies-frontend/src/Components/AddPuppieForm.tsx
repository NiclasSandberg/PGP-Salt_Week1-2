import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { IPuppy } from '../interfaces';
import { addNewPupp } from './api';

interface addPuppieFormProps {
  addNewPuppie: (pup: any) => void;
}

const AddPuppieForm = ({ addNewPuppie }: addPuppieFormProps) => {

  const [name, setName] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const dateInputRef = useRef(null);

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(date);

    const getPhoto = async (breed: string) => {
      const response1 = await fetch(`https://api.unsplash.com/search/photos?query=${breed}+dog&client_id=HT6MXot1lxxX_egVZ7bLMjyOUwUEOQuIWbJpTNGR2es`);
      const responseData1 = await response1.json();
      console.log(responseData1.results[0].urls.small);

      const dateFormat: Date = new Date(date);

      const newPup: Partial<IPuppy> = {
        name: `${name}`,
        breed: `${breed}`,
        photoUrl: `${responseData1.results[0].urls.small}`,
        birthDate: dateFormat
      }
      addNewPuppie(newPup);
    }
    getPhoto(breed);

  }

  useEffect(() => {

  }, [photoUrl])

  return (
    <>
      <form className='add-puppie-form' onSubmit={onFormSubmit}>
        <input onChange={(e) => {
          setName(e.target.value);
        }} type="text" placeholder='Enter name' />
        <input onChange={(e) => {
          setBreed(e.target.value);
        }} type="text" placeholder='Enter breed' />
        <input
          type="date"
          ref={dateInputRef}
          onChange={(e) => setDate(e.target.value)}
        />
        <p>Selected Date: {date}</p>
        <button>Add</button>
      </form>
    </>
  )
}

export default AddPuppieForm