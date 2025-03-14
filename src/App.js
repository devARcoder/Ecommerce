import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AllProducts from './components/AllProducts';

const App = () => {
  
  return (
    <div>
       <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/everything" element={<AllProducts  />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;