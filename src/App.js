import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import CreditCard from './components/CreditCard';
import Cards from './components/Cards';
import ButtonCenter from './components/ButtonCenter';



const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CreditCard/>
      <Cards/>
      <ButtonCenter/>
    </div>
  );
}

export default App;
