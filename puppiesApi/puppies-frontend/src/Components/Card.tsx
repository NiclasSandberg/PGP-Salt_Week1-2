import React from 'react'
import { IPuppy } from '../interfaces'
import './Card.css';
import { deletePupp } from './api';
import { Link } from 'react-router-dom';

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
        <Link to={"/editpuppy"}>
          <div className="image-container">
            <img src={puppy?.photoUrl} alt="" />
          </div>
        </Link>
        <h1>{puppy?.name}</h1>
        <p>{puppy?.breed}</p>
        <p>{puppy?.birthDate?.toString().substring(0, 10)}</p>
        <p>ID: {puppy?.id}</p>

      </div>
    </>
  )
}

export default Card