import {InitialFriendsType, newStatusSubscribeAC} from "../redux/friendsReducer";
import {RootReducerType} from "../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Friends} from "./Friends";

export type MapStatePropsType={
    friends:InitialFriendsType
}
export type MapDispatchToPropsType={
    newStatusSubscribe:(idFriend:string,newStatus:boolean)=>void
}

export type FriendsTypeProps=MapStatePropsType&MapDispatchToPropsType

function mapStateProps(state:RootReducerType):MapStatePropsType{
    return {
        friends:state.friends
    }
}
function mapDispatchToProps(dispatch:Dispatch):MapDispatchToPropsType{
    return {
        newStatusSubscribe:(idFriend:string,newStatus:boolean)=>{
            dispatch(newStatusSubscribeAC(idFriend,newStatus))
        },

    }
}
export const FriendsContainer = connect(mapStateProps,mapDispatchToProps)(Friends)