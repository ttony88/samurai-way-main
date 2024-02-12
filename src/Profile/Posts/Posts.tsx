import React, {FC}  from 'react'
import style from './Posts.module.css'
import { Post } from './Post/Post'

type PostsProps = {
    
}
export const Posts:FC<PostsProps> = (props) => {

    return(
        <div className={style.wrapper}>
            <form className={style.form} action="">
                <textarea></textarea>
                <button>add post</button>
            </form>
            
            <Post textPost="Hello how are you" countLike={4} />
            <Post textPost="I'm Anton" countLike={2} />
        </div>
    )
}