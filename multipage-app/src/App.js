import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
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
