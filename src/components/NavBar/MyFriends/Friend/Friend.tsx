import React, {FC}  from 'react'
import style from './Friend.module.css'
import frendPhoto from '../../../../assets/img/myFriends-photo.jpg'

type FriendProps = {
    name: string
}
export const Friend:FC<FriendProps> = (props) => {

    return(
        <div className={style.frend}>
            <img className={style.frendPhoto} src={frendPhoto} alt='frendPhoto' />
            <span className={style.name}>{props.name}</span>
        </div>
    )
}