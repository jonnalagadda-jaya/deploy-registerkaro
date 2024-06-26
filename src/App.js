import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Services />
    </div>
  );
}

export default App;
