import {v1} from "uuid";


export type InitialStateType = {
    posts: PostType[]
    postValue: string
}
export type PostType = {
    id: string
    title: string
    likesValue: number
}

const initialState:InitialStateType = {
    posts: [
        {id: v1(), title: 'Hello, World!', likesValue: 1},
        {id: v1(), title: 'Hello, country!', likesValue: 2},
        {id: v1(), title: 'Hello, Vite!!', likesValue: 4},
        {id: v1(), title: 'Hello, Germany!', likesValue: 1},
    ],
    postValue: '',
}


export const profileReducer = (state: InitialStateType=initialState, action: RootType):InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            if (state.postValue.trim().length>0){
                return {...state,posts:[...state.posts,{id: v1(), title: state.postValue, likesValue: 0}],postValue:""}
            }
            return state
        }
        case "INPUT-POST-VALUE":{
            return {...state,postValue:action.payload.value}
        }
        default:
            return state
    }
}



type RootType=AddPostACType| InputPostValueACType
export type AddPostACType=ReturnType<typeof addPostAC>
export const addPostAC=()=>{
    return{
        type:"ADD-POST"
    }as const
}

export type InputPostValueACType=ReturnType<typeof inputPostValueAC>
export const inputPostValueAC=(value:string)=>{
    return{
        type:"INPUT-POST-VALUE",
        payload:{value}
    }as const
}