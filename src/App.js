import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AllProducts from './components/AllProducts';
import MenCloths from './components/MenCloths';
import WomenCloths from './components/WomenCloths';
import ElectronicProducts from './components/ElectronicProducts';
import JeweleryProducts from './components/JeweleryProducts';

const App = () => {
  
  return (
    <div>
       <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/everything" element={<AllProducts  />} />
          <Route exact path="/men" element={<MenCloths  />} />
          <Route exact path="/women" element={<WomenCloths  />} />
          <Route exact path="/electronics" element={<ElectronicProducts  />} />
          <Route exact path="/jewelery" element={<JeweleryProducts  />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;