import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IPuppy } from './interfaces';
import Gallery from './Components/Gallery';
import { addNewPupp } from './Components/api';
import AddPuppieForm from './Components/AddPuppieForm';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import EditPuppy from './Pages/EditPuppy';
import Home from './Pages/Home';


function App() {


  return (
    <div className="App">
 
      <Routes>
      <Route path="/editpuppy/:id" element={<EditPuppy/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
