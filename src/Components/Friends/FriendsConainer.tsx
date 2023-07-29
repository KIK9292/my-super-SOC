import {
    InitialFriends,
    newStatusSubscribeAC, setCurrentPageAC,
    setFriendsForApiAC, togglePreloaderAC,
    UserItemsResponseType,
    UsersResponseType
} from "../redux/friendsReducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import React from "react";
import axios from "axios";
import {RootReducerType} from "../redux/store";

export type FriendsAPIType = {
    componentDidMount: () => void
    render: () => JSX.Element
    onPageChange:(newPage:number)=>void
}


class FriendsAPI extends React.Component<FriendsTypeProps, FriendsAPIType> {

    componentDidMount() {
        this.props.togglePreloader()
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(res => {
                this.props.setFriends(res.data)
                this.props.togglePreloader()
            })

    }
    onPageChange=(newPage:number)=>{
        this.props.setCurrentPage(newPage)
        this.props.togglePreloader()
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${newPage}`)
            .then(res => {
                this.props.setFriends(res.data)
                this.props.togglePreloader()
            })

    }
    render() {
        return (
            <Friends friends={this.props.friends} preloaderdStatus={this.props.preloaderdStatus} currentPage={this.props.currentPage} nameButtonArray={this.props.nameButtonArray}  onPageChange={this.onPageChange}/>
        );
    }

}

export type MapStatePropsType = {
    friends: UserItemsResponseType[]
    preloaderdStatus: boolean
    totalFriendsCount: number
    pageSize: number
    currentPage: number
    nameButtonArray:number[]
}
export type MapDispatchToPropsType = {
    newStatusSubscribe: (idFriend: string, newStatus: boolean) => void
    setFriends: (friends: UsersResponseType) => void
    togglePreloader: () => void
    setCurrentPage:(newPage:number)=>void


}

export type FriendsTypeProps = MapStatePropsType & MapDispatchToPropsType

function mapStateProps(state: RootReducerType): MapStatePropsType {
    return {
        friends: state.friends.friends,
        preloaderdStatus: state.friends.preloaderStatus,
        totalFriendsCount: state.friends.totalFriendsCount,
        pageSize: state.friends.pageSize,
        currentPage: state.friends.currentPage,
        nameButtonArray:state.friends.nameButtonArray
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        newStatusSubscribe: (idFriend: string, newStatus: boolean) => {
            dispatch(newStatusSubscribeAC(idFriend, newStatus))
        },
        setFriends: (friends: UsersResponseType) => {
            dispatch(setFriendsForApiAC(friends))
        },
        togglePreloader: () => {
            dispatch(togglePreloaderAC())
        },
        setCurrentPage:(newPage:number)=>{
            dispatch(setCurrentPageAC(newPage))
        }

    }
}

export const FriendsContainer = connect(mapStateProps, mapDispatchToProps)(FriendsAPI)