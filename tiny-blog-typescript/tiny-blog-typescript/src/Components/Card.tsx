import React from 'react'
import { IPosts } from '../interface'


interface IPropsPost{
    post: IPosts
}

const Card = ({post}:IPropsPost) => {
  return (
    <div className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.tags?.join(', ').toUpperCase()}.</p>
          </div>
  )
}

export default Card