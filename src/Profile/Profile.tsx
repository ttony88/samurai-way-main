import React, {FC}  from 'react'
import style from './Profile.module.css'
import { Posts } from './Posts/Posts'

type ProfileProps = {

}
export const Profile:FC<ProfileProps> = (props) => {

    return(
        <div className={style.profile}>
            <Posts />
        </div>
    )
}