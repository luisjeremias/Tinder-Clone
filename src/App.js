import React from 'react';
import './App.css';
import Header from "./header.js";
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons.js';
function App() {
  return (
   <div className="app">
  <Header/>
  <TinderCards/>
  <SwipeButtons/>
   </div>
  );
}

export default App;
