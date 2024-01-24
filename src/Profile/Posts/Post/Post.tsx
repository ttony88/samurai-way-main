import React, {FC}  from 'react'
import style from './Post.module.css'
import myPhoto from '../../../assets/img/my-photo.jpeg'

type PostProps = {
    textPost: string
    countLike: number
}
export const Post:FC<PostProps> = (props) => {

    return(
        <div className={style.post}>
            <div className={style.content}>
                <img className={style.photo} src={myPhoto} alt="photo" />
                <span className={style.text}>{props.textPost}</span>
            </div>
            
            <div>{`like: ${props.countLike}`}</div>
        </div>
    )
}