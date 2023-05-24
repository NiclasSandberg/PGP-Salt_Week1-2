import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import blog_logo from './img/blog-logo.png';
import Card from './Components/Card';
import { IPosts, mockData, ICategory } from './interface';


function App() {

  const [posts, setPosts] = useState<IPosts[]>([]);
  const [category, setCategory] = useState<string>("french");

  const categories: ICategory[] = [
    { tag: "French" },
    { tag: "History" },
    { tag: "Mystery" },
    { tag: "Love" }
  ];

  const fetchPosts = async (): Promise<IPosts[] | string | undefined> => {
    const api = 'https://dummyjson.com/posts'
    try {
      const response = await fetch(api)
      const data = await response.json()
      console.log(data.posts);
      setPosts(data.posts);
      return data
    } catch (error) {
      if (error) {
        return "Couldn't fetch data!"
      }
    }
  }

  const filterByCategory = (post: IPosts): boolean => {
    return post.tags.includes(category);
  };

  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    setCategory(event.target.value.toLowerCase());
  }

  useEffect(() => {
    fetchPosts();

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={blog_logo} className="App-logo" alt="logo" />
      </header>
      <div className="select-dropdown">
        <select onChange={handleChange}>
          {categories.map((category, index) => (
            <option key={index} value={category.tag}>
              {category.tag}
            </option>
          ))}
        </select>
      </div>

      <div className="card-wrapper">
        {posts &&
          posts.filter(filterByCategory).map((post: IPosts) => {
            return <Card key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
}

export default App;
