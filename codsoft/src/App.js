import React from 'react'
import { Navbar } from "./components/navbar/navbar";
import Index from './components/home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Index/>
    </div>
  );
}

export default App;
