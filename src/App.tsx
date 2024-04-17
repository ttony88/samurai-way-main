import React, { FC } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import { Users } from './components/Users/Users';
import { Setting } from './components/Setting/Setting';
import { myFriendType } from './redux/sideBarReducer';
import { DialogType, MessageType } from './redux/messageReducer';

export type PostType = {
  id: string
  text: string
  countLike: number
} 

export type ProfilePageType = {
  posts: PostType[]
}

export type MessagePageType = {
  dialogs: DialogType[]
  messages: MessageType[]
}

export type SideBarType = {
  myFriends: myFriendType[]
}

type StateType = {
  profilePage: ProfilePageType
  sideBar: SideBarType
  messagePage: MessagePageType
}

type AppPropsType = {
  state: StateType
}

const App: FC<AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        <NavBar />
        <div className="content">
          <Route path={"/profile"} render={() => <Profile />} />
          <Route path={"/messages"} render={() => <Messages />} />
          <Route path={"/users"} render={() => <Users />} />
          <Route path={"/setting"} render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;