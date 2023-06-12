import React from 'react';
import {DialogType} from "../../Types/Types";
import s from './Users.module.css'
export type UsersPropsType={
    users:DialogType[]
}


export const Users = (props:UsersPropsType) => {
    return (
        <div className={s.users}>
            {props.users.map(el=>{
                return(
                    <div>{el.name}</div>
                )
            })}
        </div>
    );
};

