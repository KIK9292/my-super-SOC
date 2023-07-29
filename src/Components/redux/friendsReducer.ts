export type InitialFriends = {
    friends: UserItemsResponseType[]
}


export type UsersResponseType = {
    items: UserItemsResponseType[]
    totalCount: number
    error: null | string
}
export type UserItemsResponseType = {
    name: string
    id: number
    photos: UserPhotosResponseType
    status: null | string
    followed: boolean
}
export type UserPhotosResponseType = {
    small: null | string
    large: null | string
}

const InitialFriends: InitialFriends = {
    friends: []
}


export const friendsReducer = (state: InitialFriends = InitialFriends, action: RootFriendsType): InitialFriends => {
    switch (action.type) {
        case "SET-FRIENDS-FOR-API": {
            return {...state, friends: action.payload.users}
        }
        default:
            return state
    }
}
type RootFriendsType = NewStatusSubscribeACType | SetFriendsForApiACType
export type NewStatusSubscribeACType = ReturnType<typeof newStatusSubscribeAC>
export const newStatusSubscribeAC = (idFriend: string, newStatus: boolean) => {
    return {
        type: "NEW-STATUS-SUBSCRIBE",
        payload: {idFriend, newStatus}
    } as const
}
export type SetFriendsForApiACType = ReturnType<typeof setFriendsForApiAC>
export const setFriendsForApiAC = (users: UserItemsResponseType[]) => {
    return {
        type: 'SET-FRIENDS-FOR-API',
        payload: {users}
    } as const
}