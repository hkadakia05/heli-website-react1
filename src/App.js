import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HELI from './components/HELI';
import Particles from './components/Particles'; 
import About from './components/About';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <HELI />
      <About/>

      <Particles /> 
    </div>
  );
}

export default App;





