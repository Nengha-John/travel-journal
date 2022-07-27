import React from 'react'
import './App.css';
import Header from './components/header';
import CardsColumn from './components/body';

function App() {
  return (
    <div className="App">
      <Header />
      <CardsColumn />
    </div>
  );
}

export default App;
