export type InitialFriends = {
    friends: UserItemsResponseType[]
    preloaderStatus: boolean
    totalFriendsCount: number
    pageSize: number
    currentPage: number
    nameButtonArray: number[]


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
    friends: [],
    preloaderStatus: false,
    totalFriendsCount: 0,
    pageSize: 10,
    currentPage: 1,
    nameButtonArray: []
}


export const friendsReducer = (state: InitialFriends = InitialFriends, action: RootFriendsType): InitialFriends => {
    switch (action.type) {
        case "SET-FRIENDS-FOR-API": {
            let nameButton = []
            for (let i = 1; i <= 15; i++) {
                nameButton.push(i)
            }
            return {
                ...state, friends: action.payload.users.items, totalFriendsCount: action.payload.users.totalCount,
                nameButtonArray:nameButton
            }
        }
        case "TOGGLE-PRELOADER": {
            return {...state, preloaderStatus: !state.preloaderStatus}
        }
        case "SET-CURRENT-PAGE":{
            return {...state,currentPage:action.payload.newPage}
        }
        default:
            return state
    }
}
type RootFriendsType = NewStatusSubscribeACType | SetFriendsForApiACType | TogglePreloaderACType|SetCurrentPageACType
export type NewStatusSubscribeACType = ReturnType<typeof newStatusSubscribeAC>
export const newStatusSubscribeAC = (idFriend: string, newStatus: boolean) => {
    return {
        type: "NEW-STATUS-SUBSCRIBE",
        payload: {idFriend, newStatus}
    } as const
}
export type SetFriendsForApiACType = ReturnType<typeof setFriendsForApiAC>
export const setFriendsForApiAC = (users: UsersResponseType) => {
    return {
        type: 'SET-FRIENDS-FOR-API',
        payload: {users}
    } as const
}
export type TogglePreloaderACType = ReturnType<typeof togglePreloaderAC>
export const togglePreloaderAC = () => {
    return {
        type: 'TOGGLE-PRELOADER'
    } as const
}
export type SetCurrentPageACType=ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC=(newPage:number)=>{
    return{
        type:'SET-CURRENT-PAGE',
        payload:{newPage}
    }as const
}