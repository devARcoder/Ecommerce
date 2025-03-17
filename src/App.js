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
import OfferAllBrands from './components/OfferAllBrands';
import Footer from './components/Footer';
// import Cart from "./components/Cart";

// const sampleProducts = [
//   { id: 1, name: "Product 1", price: 20.99 },
//   { id: 2, name: "Product 2", price: 15.49 },
//   { id: 3, name: "Product 3", price: 30.00 },
// ];
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
        <OfferAllBrands/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;