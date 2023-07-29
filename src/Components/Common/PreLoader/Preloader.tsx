import React from 'react';
import preloaderlogo from '../../../Assets/preloader.gif'
import  s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloaderlogo} alt="preloaderlogo"/>
        </div>
    );
};

