import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HELI from './components/HELI';
import Particles from './components/Particles'; 

function App() {
  return (
    <div className="App">
      <Particles />  
      <Navbar />
      <HELI />
    </div>
  );
}

export default App;





