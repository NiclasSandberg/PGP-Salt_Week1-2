import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IPuppy } from './interfaces';

interface thePuppies {
  puppies: IPuppy[]
}

function App() {

  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  useEffect(() => {
    getPuppies().then(setPuppies);
  },[])

  const getPuppies = async () => {
    const response = await fetch("http://localhost:8080/puppy/puppies");
    const json = (await response.json() as thePuppies);
    console.log(json.puppies);
    return json.puppies;
  }

  return (
    <div className="App">
      {}
    </div>
  );
}

export default App;
