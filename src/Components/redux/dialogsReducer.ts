import {v1} from "uuid";


export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsStateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    messageValue: string
}
const initialState: DialogsStateType = {
    dialogs: [
        {id: v1(), name: 'Katy'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Sergey'},
        {id: v1(), name: 'Misha'},
        {id: v1(), name: 'Lena'},
    ],
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'My name is'},
        {id: v1(), message: 'What is it?'},
        {id: v1(), message: 'YO!'},
        {id: v1(), message: 'YO!MAN!'},
    ],
    messageValue: ''
}

export const dialogsReducer = (state: DialogsStateType = initialState, action: RootType): DialogsStateType => {
    switch (action.type) {
        case "INPUT-MESSAGE-VALUE": {
            return {...state, messageValue: action.payload.value}
        }
        case "ADD-MESSAGE":{
            if (state.messageValue.trim().length>0){
                return {...state,messages:[...state.messages,{id: v1(), message: state.messageValue}],messageValue:""}
            }
            return state
        }
        default:
            return state
    }
}


type RootType = InputMessageValueACType | AddMessageACType
export type InputMessageValueACType = ReturnType<typeof inputMessageValueAC>
export const inputMessageValueAC = (value: string)=>
{
    return {
        type: "INPUT-MESSAGE-VALUE",
        payload: {value}
    } as const
}
export type AddMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}