import React from 'react';
import s from "../Dialogs.module.css";


export type AddMessageAreaTypeProps={
    changeInputMessageValue:(value:string)=>void
    inputValue:string
    addMessage:()=>void
}

export const AddMessageArea = (props:AddMessageAreaTypeProps) => {
    return (
        <div className={s.addMessageArea}>
            <input
                value={props.inputValue}
                onChange={(e)=>props.changeInputMessageValue(e.currentTarget.value)}/>
            <button onClick={props.addMessage}>add Message</button>
        </div>
    );
};

