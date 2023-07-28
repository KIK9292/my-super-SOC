import {v1} from "uuid";

export type InitialFriendsType={
    users:FriendsType[]
}
export type FriendsType={
    id:string
    photoUrl:string
    followed:boolean
    fullName:string
    status:string
    location:LocationType
}
export type LocationType={
    city:string
    country:string
}

const InitialFriends:InitialFriendsType = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://cdn.7days.ru/upload/images/673/df4dbddbd06622ac446857c5986a5.jpg',
            followed: true,
            fullName: "Chad krueger",
            status: "soloist",
            location: {
                city: "Hanna",
                country: 'Canada'
            }
        },
        {
            id: v1(),
            photoUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2022/09/Kendrick-Lamar-BET-Awards-2-1000x600.jpg',
            followed: false,
            fullName: 'Kendrick Lamar',
            status: 'rapper',
            location: {
                city: 'Compton',
                country: 'USA'
            }
        },
        {
            id: v1(),
            photoUrl: 'https://i.scdn.co/image/ab6761610000e5ebb78f77c5583ae99472dd4a49',
            followed: true,
            fullName: 'David Bowie',
            status: 'singer-songwriter',
            location: {
                city: 'London',
                country: 'UK'
            }
        },
        {
            id: v1(),
            photoUrl: 'https://m.media-amazon.com/images/M/MV5BYjQwNzMzOGUtYmVkMS00ZmUxLWEwMDAtMWRmYTczZjQ3NWU3XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_FMjpg_UX1000_.jpg',
            followed: true,
            fullName: 'Jimi Hendrix',
            status: 'guitarist',
            location: {
                city: 'Seattle',
                country: 'USA'
            }
        }
    ]
}






export const friendsReducer=(state:InitialFriendsType=InitialFriends,action:RootFriendsType):InitialFriendsType=>{
    switch (action.type) {
        case "NEW-STATUS-SUBSCRIBE":{
            return {...state,users:state.users.map(el=>el.id===action.payload.idFriend?{...el,followed:action.payload.newStatus}:el)}
        }
        default:return state
    }
}
type RootFriendsType=NewStatusSubscribeACType
export type NewStatusSubscribeACType=ReturnType<typeof newStatusSubscribeAC>
export const newStatusSubscribeAC=(idFriend:string,newStatus:boolean)=>{
    return{
        type:"NEW-STATUS-SUBSCRIBE",
        payload:{idFriend,newStatus}
    }as const
}