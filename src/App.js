import React from 'react';
import './App.css';
// import Store from './components/Store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brands/>
      {/* <Store/> */}
    </div>
  );
};

export default App;