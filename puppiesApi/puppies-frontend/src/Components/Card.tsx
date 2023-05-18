import React from 'react'
import { IPuppy } from '../interfaces'
import './Card.css';
import { deletePupp } from './api';
import { Link } from 'react-router-dom';
import EditPuppy from '../Pages/EditPuppy';

interface CardProps {
  puppy: IPuppy
}

const Card = ({ puppy }: CardProps) => {

  const deletePup = () => {
    deletePupp(puppy?.id);
  }

  return (
    <>
      <div className="card-container">

        <div className="dismiss"
          onClick={() => {
            deletePup()
          }}>X</div>
        <Link to={"/editpuppy/"+puppy?.id}>
          <div className="image-container">
            <img src={puppy?.photoUrl} alt="" />
          </div>
        </Link>
        <h2>{puppy?.name}</h2>
        <p>{puppy?.breed}</p>
    
      </div>
      
    </>
  )
}

export default Card