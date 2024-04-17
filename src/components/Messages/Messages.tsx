import React, {ChangeEvent, FC, useState}  from 'react'
import style from './Messages.module.css'
import { Dialog } from './Dialog/Dialog'
import { MessagesItem } from './MessagesItem/MessagesItem'
import { connect } from 'react-redux'
import { DialogType, MessageType, addMessage } from '../../redux/messageReducer'
import { StateType } from '../../redux/store'

type MessagesProps = {
    dialogs: DialogType[]
    messages: MessageType[]
    addMessage: (text: string) => void
}
export const Messages:FC<MessagesProps> = (props) => {

    const [textMessage, setTextMessage] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextMessage(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage(textMessage)
        setTextMessage('')
    }

    return(
        <div className={style.dialogsPage}>
            <div className={style.dialogs}>
                {props.dialogs.map(d => <Dialog key={d.id} id={d.id} title={d.title} />)}
            </div>
            <div className={style.messages}>
                <div className={style.form}>
                    <textarea onChange={onChangeHandler} value={textMessage} />
                    <button onClick={onClickHandler}>add message</button>
                </div>
                {props.messages.map(m => <MessagesItem key={m.id} text={m.text}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state: StateType) => ({
    dialogs: state.messagePage.dialogs,
    messages: state.messagePage.messages,
})

export default connect(mapStateToProps, {addMessage})(Messages)