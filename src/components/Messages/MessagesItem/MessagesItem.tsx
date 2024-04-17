import React, { FC }  from 'react'
import style from './MessagesItem.module.css'

type MessagesItemProps = {
    text: string
}
export const MessagesItem:FC<MessagesItemProps> = (props) => {

    return(
        <div className={style.message}>
            {props.text}
        </div>
    )
}