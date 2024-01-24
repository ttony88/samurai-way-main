import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { NavBar } from './NavBar/NavBar';
import { Profile } from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header /> 
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;