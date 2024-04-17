import { v1 } from "uuid"

export type DialogType = {
    id: string
    title: string
}
  
  export type MessageType = {
    id: string
    text: string
}
  
const initialState = {
    dialogs: [
        {id: '1', title: 'Anton'},
        {id: '2', title: 'Dasha'},
        {id: '3', title: 'Sava'},
        {id: '4', title: 'Rita'},
    ] as DialogType[],

    messages: [
        {id: '1', text: 'hi!'},
        {id: '2', text: 'hi, how are you?'},
        {id: '3', text: 'good'},
    ] as MessageType[],
}

type InitialStateType = typeof initialState

type AddMessageType = {
    type: 'ADD-MESSAGE'
    text: string
}

type ActionType = AddMessageType

export const messageReducer = (state: InitialStateType=initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state, 
                messages: [{id: v1(), text: action.text},...state.messages]
            }
    
        default:
            return state
    }
}

export const addMessage = (text: string) => ({type: 'ADD-MESSAGE', text} as const)