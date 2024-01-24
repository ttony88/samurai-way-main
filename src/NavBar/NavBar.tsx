import React, {FC}  from "react"
import style from "./NavBar.module.css"

export const NavBar:FC = () => {

    return(
        <nav className={style.navBar}>
           <ul className={style.menu}>
                <li className={`${style.item} ${style.active}`}>Messages</li>
                <li className={style.item}>Profile</li>
                <li className={style.item}>Users</li>
                <li className={style.item}>Setting</li>
           </ul> 
        </nav>
    )
}



