import React, { useEffect, useRef, useState } from 'react'
import Card from '../Components/Card'
import { IPuppy } from '../interfaces'
import { useNavigate, useParams } from 'react-router-dom'
interface CardProps {
    puppy: IPuppy[]
  }  



const EditPuppy = () => {

 
const { id } = useParams();
const [puppy, setPuppy] = useState<IPuppy>();
const navigate = useNavigate();

const [name, setName] = useState<string>('');
const [breed, setBreed] = useState<string>('');
const [photoUrl, setPhotoUrl] = useState<string>('');
const [date, setDate] = useState<string>('');
const dateInputRef = useRef(null);


const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();

  const updatePuppy = async(editedPuppy: IPuppy) => {
    const createdPuppy: IPuppy = await fetch("http://localhost:8080/puppy/puppies/"+id,
    {
      method: "PUT",
        body: JSON.stringify(editedPuppy),
        headers: {
          "Content-Type": "application/json"
        }
    }).then(a => a.json()).catch(error => { console.log(error) });
  }
  
  const editedPuppy: IPuppy = {
    ...puppy,
    name,
    breed
   
  }
  console.log(editedPuppy)
  updatePuppy(editedPuppy);
  navigate("/");
}

useEffect(() => {
  const getPuppiesById = async () => {
    const response = await fetch("http://localhost:8080/puppy/puppies/"+id);
    const json = await response.json();
    return json;
}
  getPuppiesById().then(setPuppy);
},[])


  return (
    <>
       
        <h2>Edit your puppy!</h2>
         <form className='add-puppie-form' onSubmit={onFormSubmit}>
        <input onChange={(e) => {
          setName(e.target.value);
        }} type="text" placeholder={puppy?.name} />
        <input onChange={(e) => {
          setBreed(e.target.value);
        }} type="text" placeholder={puppy?.breed} />
        <input
          type="date"
          ref={dateInputRef}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>Add</button>
      </form>
      
        <p><b>Name:</b> {puppy?.name}</p>
        <p><b>Breed:</b>{puppy?.breed}</p>
        <p><b>Birth Date:</b>{puppy?.birthDate?.toString().substring(0, 10)}</p>
        <p><b>ID:</b> {puppy?.id}</p>
        
        
        <img style={{maxWidth:"40vh"}} src={puppy?.photoUrl} alt="" />
    </>
  )
}

export default EditPuppy