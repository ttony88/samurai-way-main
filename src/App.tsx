import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './Profile/Profile';
import { Messages } from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import { Users } from './components/Users/Users';
import { Setting } from './components/Setting/Setting';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        <NavBar />
        <div className="content">
          <Route path={"/profile"} component={Profile} />
          <Route path={"/messages"} component={Messages} />
          <Route path={"/users"} component={Users} />
          <Route path={"/setting"} component={Setting} />
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;