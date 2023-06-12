import React from 'react';
import {PostType} from "../../Types/Types";


export type PostsProsType={
    posts:PostType[]
}


export const Posts = (props:PostsProsType) => {
    return (
        <div>{props.posts.map(el=>{
            return (
                <div>{el.title}{el.likesValue}</div>
            )
        })}</div>
    );
};

