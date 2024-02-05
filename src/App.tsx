import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './Profile/Profile';
import { Messages } from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        <NavBar />
        <div className="content">
          <Route path={"/profile"} component={Profile} />
          <Route path={"/messages"} component={Messages} />
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;