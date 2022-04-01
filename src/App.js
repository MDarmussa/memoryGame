import './App.css';
import { Component } from 'react';
import MemoryCard from './components/MemoryCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3>Match cards to win</h3>
      </header>
      <div className='Cards'>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      </div>

    </div>
  );
}

export default App;
