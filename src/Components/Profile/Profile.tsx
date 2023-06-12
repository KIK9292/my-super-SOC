import React from 'react';
import {v1} from "uuid";
import {Posts} from "./Posts/Posts";
import {PostType} from "../Types/Types";


export type ProfilePostType={
    posts:PostType[]
}

export const Profile = (props:ProfilePostType) => {

    return (
        <div>
            <br/>
            <div>Profile</div>
            <div>ava+desc</div>
            <div>input+button</div>
            <Posts posts={props.posts}/>
            <br/>
        </div>
    );
};

