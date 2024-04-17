import React, {FC}  from "react"
import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
import MyFriends from "./MyFriends/MyFriends"

export const NavBar:FC = (props) => {

    return(
    <nav className={style.navBar}>
        <ul className={style.menu}>
                <li className={style.item}><NavLink to="/profile">Profile</NavLink></li>
                <li className={`${style.item} ${style.active}`}><NavLink to="/messages">Messages</NavLink></li>
                <li className={style.item}><NavLink to="/users">Users</NavLink></li>
                <li className={style.item}><NavLink to="/setting">Setting</NavLink></li>
        </ul> 
        <MyFriends />
    </nav> 
    )
}



