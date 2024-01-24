import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './Profile/Profile';
import { Messages } from './components/Messages/Messages';

const App = () => {
  return (
    <div className="App">
      <Header /> 
      <NavBar />
      {/*<Profile />*/}
      <Messages />
    </div>
  );
}

export default App;