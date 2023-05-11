import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeUserName from './Components/ChangeUserName';
import { UserData } from './interfaces';


function App() {

  const [user, setUser] = useState<UserData>({
    name: '',
    age: 0,
    address: ''
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.currentTarget.value;

    setUser({ ...user, name: value })
  }

  useEffect(() => {

    const getUserData = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const result = data.results[0];

      setUser(prev => {
        return {
          ...prev,
          name: result.name.first,
          age: result.dob.age,
          address: result.location.street.name,
        }
      })

    }
    getUserData();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        
        <ChangeUserName user={user} onNameChanged={changeHandler} />
        <p>{user?.name}</p>
        <p>{user?.age}</p>
        <p>{user?.address}</p>
      </header>
    </div>
  );
}

export default App;
