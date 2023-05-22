import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import blog_logo from './img/blog-logo.png';
import { mockData } from './interface';
import Card from './Components/Card';
//import { IPosts, mockData } from './interface';
//import { getPosts } from './api';

interface IPosts {
  id?: number;
  title?: string;
  body?: string;
  tags?: string[]
}

interface ICategory{
  tag?:string
}

function App() {

  const [mockDatas, setMockDatas] = useState<any>();
  const [category, setCategory] = useState<string>("french");
    
  const fetchEmployees = async (): Promise<Array<IPosts> | string | undefined> => {
    const api = 'https://dummyjson.com/posts'
    try {
      const response = await fetch(api)
      const data = await response.json()
      console.log(data.posts);
      setMockDatas(data.posts);
      return data
    } catch (error) {
      if (error) {
        return "Couldn't fetch data!"
      }
    }
  }

  useEffect(() => {
   // fetchEmployees();
  
  }, [])

const categories:ICategory[] = [
  { tag: "French" },
  { tag: "History" },
  { tag: "Mystery" },
  { tag: "Love" }
];

  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    console.log(event.target.value);
    setCategory(event.target.value.toLocaleLowerCase());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={blog_logo} className="App-logo" alt="logo" />
      </header>

       <div className="select-dropdown">
        <select onChange={handleChange}>
        {categories.map((category) => (
          <option value={category.tag}>{category.tag}</option>
        ))}
        </select>
        </div>
        
      <div className="card-wrapper">
      {  mockData && mockData
        .filter((post: { tags: string }) => post.tags.includes(`${category}`)).map((post: IPosts,index:number) => {
            return <div className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.tags?.join(', ').toUpperCase()}.</p>
          </div> 
        })
      }
      </div>
    </div>
  );
}

export default App;