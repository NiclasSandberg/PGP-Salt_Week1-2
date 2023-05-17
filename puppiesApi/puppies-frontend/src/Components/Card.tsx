import React from 'react'
import { IPuppy } from '../interfaces'
import './Card.css';

interface CardProps {
    puppy: any
}

const Card = ({puppy}:CardProps) => {
   
  return (
    <>
    <div className="card-container">
    <div className="image-container">
   <img src={puppy?.photoUrl} alt="" />
   </div>
    <h1>{puppy?.name}</h1>
    <p>{puppy?.breed}</p>
    <p>{puppy?.birthDate?.substring(0,10)}</p>
    </div>
    </>
  )
}

export default Card