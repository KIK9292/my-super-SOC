import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../redux/store";
import {addMessageAC, DialogsStateType, inputMessageValueAC} from "../redux/dialogsReducer";
import {Dispatch} from "redux";

export type MapStatePropsType={
    dialogs:DialogsStateType
}

export type MapDispatchToPropsType={
    changeInputMessageValue:(value:string)=>void
    addMessage:()=>void
}



export type DialogsPropsType=MapStatePropsType&MapDispatchToPropsType
function mapStateProps(state:RootReducerType):MapStatePropsType{
    return {
        dialogs:state.dialogs
    }
}
function mapDispatchToProps(dispatch:Dispatch):MapDispatchToPropsType{
    return {
        changeInputMessageValue:(value:string)=>{
            dispatch(inputMessageValueAC(value))
        },
        addMessage:()=>{
            dispatch(addMessageAC())
        }
    }
}
export const DialogsContainer = connect(mapStateProps,mapDispatchToProps)(Dialogs)

