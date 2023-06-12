import React from 'react';
import {DialogsType} from "../Types/Types";
import {Users} from "./Users/Users";
import {Messages} from "./Messages/Messages";
import s from './Dialogs.module.css'

export type DialogsPropsType={
    dialogs:DialogsType
}


export const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={s.dialogWrapper}>
            <Users users={props.dialogs.dialogs}/>
            <Messages messages={props.dialogs.messages}/>
            <div className={s.addMessageArea}>
                <input type="text"/>
                <button>send message</button>
            </div>
        </div>
    );
};

