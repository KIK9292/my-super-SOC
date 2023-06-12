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

}
export type PostType = {
    id: string
    title: string
    likesValue: number
}
export type ProfileType = {
    posts: PostType[]
}
export type StateType = {
    Profile: ProfileType
    Dialogs: DialogsType
}
export type StoreType = {
    State: StateType
}
