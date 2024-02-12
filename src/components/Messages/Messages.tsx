import React, {FC}  from 'react'
import style from './Messages.module.css'
import { Dialog } from './Dialog/Dialog'
import { MessagesItem } from './MessagesItem/MessagesItem'

type MessagesProps = {
    
}
export const Messages:FC<MessagesProps> = (props) => {

    const dialogs = [
        {id: '1', title: 'Anton'},
        {id: '2', title: 'Dasha'},
        {id: '3', title: 'Sava'},
        {id: '4', title: 'Rita'},
    ]

    const messages = [
        {id: '1', text: 'hi!'},
        {id: '2', text: 'hi, how are you?'},
        {id: '3', text: 'good'},
    ]

    return(
        <div className={style.dialogsPage}>
            <div className={style.dialogs}>
                {dialogs.map(d => <Dialog key={d.id} id={d.id} title={d.title} />)}
            </div>
            <div className={style.messages}>
                {messages.map(m => <MessagesItem text={m.text} />)}
            </div>
        </div>
    )
}