import React, {FC}  from 'react'
import style from './Profile.module.css'
import Posts from './Posts/Posts'

export const Profile:FC = () => {

    return(
        <div className={style.profile}>
            <Posts />
        </div>
    )
}