import logo from './logo.svg';
import './App.css';
import SearchComponent from './Components/SearchComponent';
import { Component } from 'react';

function App() {
  return (
    <div className="container-fluid">
      <h2 className = "text-center"> React Search</h2>
      <SearchComponent></SearchComponent>
      
      
    </div>
  );
}

export default App;
