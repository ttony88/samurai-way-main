import { v1 } from "uuid"

const initialState = {
        posts: [
            {id: '1', text: "Hello how are you", countLike: 4},
            {id: '2', text: "I'm Anton", countLike: 2}
        ] as PostsType[],
}



type PostsType = {
    id: string
    text: string
    countLike: number
}

type initialStateType = typeof initialState

type ActionAddPostType = {
    type: "ADD-POST",
    text: string
}

type ActionType = ActionAddPostType

export const profileReduser = (state: initialStateType=initialState, action: ActionType): initialStateType => {

    switch(action.type){
        case "ADD-POST":
            return {
                ...state,
                posts: [{id: v1(), text: action.text, countLike: 0}, ...state.posts]
            }
        default: 
            return state
    }
}

export const addPost = (text: string) => ({type: "ADD-POST", text} as const)

