import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import LatestProducts from './components/LatestProducts';

const App = () => {
  
  return (
    <div>
       <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Hero />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;