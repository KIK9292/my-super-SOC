export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageValue:string

}
export type PostType = {
    id: string
    title: string
    likesValue: number
}
export type ProfileType = {
    posts: PostType[]
    postValue:string
}
export type StateType = {
    Profile: ProfileType
    Dialogs: DialogsType
}
export type StoreType = {
    State: StateType
    changeInputPostValue:(value:string)=>void
    rerenderTree:()=>void
    subscribe:(callback:()=>void)=> void
    addPost:()=>void
    changeInputMessageValue:(value:string)=>void
    addMessage:()=>void

}
