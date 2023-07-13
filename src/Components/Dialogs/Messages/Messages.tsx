import React from 'react';
import {MessageType} from "../../Types/Types";
import s from './Messages.module.css'
export type MessagesPropsType={
    messages:MessageType[]
}


export const Messages = (props:MessagesPropsType) => {
    return (
        <div className={s.messages}>
            {props.messages.map(el=>{
                return(
                    <div key={el.id}>{el.message}</div>
                )
            })}
        </div>
    );
};

