import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HELI from './components/HELI';
import About from './components/About';
import Adventures from './components/Adventures';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HELI />
      <About />
      <Adventures />  
      <Particles />
    </div>
  );
}

export default App;
