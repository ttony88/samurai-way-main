export type myFriendType = {
    id: string
    name: string
}

const initialState = {
    myFriends: [
        {id: '1', name: 'Anton'},
        {id: '2', name: 'Dasha'},
        {id: '3', name: 'Sava'},
        {id: '4', name: 'Rita'},
    ] as myFriendType[],
}

export type InitialStateType = typeof initialState

export const sideBarReducer = (state: InitialStateType=initialState, action:any): InitialStateType => {
    switch(action.type) {
        default: return state
    }
}