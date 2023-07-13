import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";

import {RootReducerType} from "../redux/store";
import {Dispatch} from "redux";
import {addPostAC, InitialStateType, inputPostValueAC} from "../redux/profileReducer";

export type MapStatePropsType={
    profile:InitialStateType
}

export type MapDispatchToPropsType={
    changeInputPostValue:(value:string)=>void
    addPost:()=>void
}



export type ProfilePropsType=MapStatePropsType&MapDispatchToPropsType
function mapStateProps(state:RootReducerType):MapStatePropsType{
    return {
        profile:state.profile
    }
}
function mapDispatchToProps(dispatch:Dispatch):MapDispatchToPropsType{
    return {
        changeInputPostValue:(value:string)=>{
            dispatch(inputPostValueAC(value))
        },
        addPost:()=>{
            dispatch(addPostAC())
        }
    }
}
export const ProfileContainer = connect(mapStateProps,mapDispatchToProps)(Profile)
