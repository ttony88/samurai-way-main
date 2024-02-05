import React, {FC}  from 'react'
import style from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

type DialogProps = {
    title: string
    id: string
}
export const Dialog:FC<DialogProps> = (props) => {

    const path = `/messages/${props.id}`

    return(
        <div className={style.dialog}>
            <NavLink to={path}>{props.title}</NavLink>
        </div>
    )
}