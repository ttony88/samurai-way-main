import { profileReduser } from './profileReducer';
import { combineReducers, createStore } from "redux";
import { sideBarReducer } from './sideBarReducer';
import { messageReducer } from './messageReducer';

const rootReduser = combineReducers({
    profilePage: profileReduser,
    sideBar: sideBarReducer,
    messagePage: messageReducer
})

export type StateType = ReturnType <typeof rootReduser>

export const store = createStore(rootReduser)