import {
    InitialFriends,
    newStatusSubscribeAC,
    setFriendsForApiAC,
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
}



class FriendsAPI extends React.Component<FriendsTypeProps, FriendsAPIType> {
    componentDidMount() {

        axios.get<UsersResponseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setFriends(res.data.items)
            })
    }

    render() {
        return (
            <Friends friends={this.props.friends}/>
        );
    }

}

export type MapStatePropsType = {
    friends: UserItemsResponseType[]
}
export type MapDispatchToPropsType = {
    newStatusSubscribe: (idFriend: string, newStatus: boolean) => void
    setFriends: (friends: UserItemsResponseType[]) => void

}

export type FriendsTypeProps = MapStatePropsType & MapDispatchToPropsType

function mapStateProps(state: RootReducerType): MapStatePropsType {
    return {
        friends: state.friends.friends
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        newStatusSubscribe: (idFriend: string, newStatus: boolean) => {
            dispatch(newStatusSubscribeAC(idFriend, newStatus))
        },
        setFriends: (friends: UserItemsResponseType[]) => {
            dispatch(setFriendsForApiAC(friends))
        }

    }
}

export const FriendsContainer = connect(mapStateProps, mapDispatchToProps)(FriendsAPI)