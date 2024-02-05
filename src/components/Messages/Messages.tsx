import React, {FC}  from 'react'
import style from './Messages.module.css'
import { Dialog } from './Dialog/Dialog'
import { MessagesItem } from './MessagesItem/MessagesItem'

type MessagesProps = {
    
}
export const Messages:FC<MessagesProps> = (props) => {

    return(
        <div className={style.dialogsPage}>
            <div className={style.dialogs}>
                <Dialog id='1' title='Anton' />
                <Dialog id='2' title='Dasha' />
                <Dialog id='3' title='Sava' />
                <Dialog id='4' title='Rita' />
            </div>
            <div className={style.messages}>
                <MessagesItem text='hi!' />
                <MessagesItem text='hi, how are you?' />
                <MessagesItem text='good' />
            </div>
        </div>
    )
}