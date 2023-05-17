import React from 'react'
import { IPuppy } from '../interfaces'
import Card from './Card';
import './Gallery.css';

interface GalleryProps {
    puppies: IPuppy[]
}

const Gallery = ({puppies}:GalleryProps) => {
    
  return (
    <div className="gallery-container">
      {puppies && puppies.map((puppy) => {
           return <Card puppy={puppy}  />
        })} 
        
    </div>
  )
}

export default Gallery