import React from 'react';
import {Users} from "./Users/Users";
import {Messages} from "./Messages/Messages";
import s from './Dialogs.module.css'
import {AddMessageArea} from "./AddMessageArea/AddMessageArea";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogWrapper}>
            <Users users={props.dialogs.dialogs}/>
            <Messages messages={props.dialogs.messages}/>
            <AddMessageArea changeInputMessageValue={props.changeInputMessageValue}
                            addMessage={props.addMessage}
                            inputValue={props.dialogs.messageValue}/>
        </div>
    );
};

