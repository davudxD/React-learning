import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import {BrowserRouter, Routes,Route,Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
