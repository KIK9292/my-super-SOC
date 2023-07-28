import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to='/profile' className={s.item}>
                Profile
            </NavLink>
            <NavLink to='/dialogs' className={s.item}>
                Dialogs
            </NavLink>
            <NavLink to='/music' className={s.item}>
                Music
            </NavLink>
            <NavLink to='/settings' className={s.item}>
                Settings
            </NavLink>
            <NavLink to='/friends' className={s.item}>
                Friends
            </NavLink>
        </div>
    );
};

