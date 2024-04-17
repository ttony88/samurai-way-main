import React, {ChangeEvent, FC, useState}  from 'react'
import style from './Posts.module.css'
import { Post } from './Post/Post'
import { PostType } from '../../App'
import { connect } from 'react-redux'
import { addPost } from '../../redux/profileReducer'
import { StateType } from '../../redux/store'

type PostsProps = {
    posts: PostType[]
    addPost: (text: string) => void
}
const Posts:FC<PostsProps> = (props) => {

    const [textPost, setTextPost] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {setTextPost(e.currentTarget.value)}

    const onClickHandler = () => {
        props.addPost(textPost)
        setTextPost('')
    }

    return(
        <div className={style.wrapper}>
            <div className={style.form}>
                <textarea value={textPost} onChange={onChangeHandler} />
                <button onClick={onClickHandler}>add post</button>
            </div>

            {props.posts.map(p => <Post key={p.id} textPost={p.text} countLike={p.countLike} />)}
        </div>
    )
}

const mapStateToProps = (state: StateType) => ({
    posts: state.profilePage.posts
})

export default connect(mapStateToProps, {addPost})(Posts)