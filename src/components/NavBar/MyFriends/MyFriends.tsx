import React, {FC}  from 'react'
import style from './MyFriends.module.css'
import { Friend } from './Friend/Friend'
import { connect } from 'react-redux'
import { StateType } from '../../../redux/store'
import { myFriendType } from '../../../redux/sideBarReducer'

type MyFriendsProps = {
    friends: myFriendType[]
}
const MyFriends: FC<MyFriendsProps> = (props) => {

    return(
        <div className={style.myFrends}>
            <span>My Friend</span>
            <div className={style.friends}>
                {props.friends.map(f => <Friend key={f.id} name={f.name} />)}
            </div>
        </div>
    )
}

const mapStateToPrors = (state: StateType) => ({
    friends: state.sideBar.myFriends
})

export default connect(mapStateToPrors)(MyFriends)