import React from 'react';

export type AddPostAreaPropsType={
    changeInputPostValue:(value:string)=>void
    inputValue:string
    addPost:()=>void
}

export const AddPostArea = (props:AddPostAreaPropsType) => {
    return (
        <div>
            <input
                value={props.inputValue}
                onChange={(e)=>props.changeInputPostValue(e.currentTarget.value)}/>
            <button onClick={props.addPost}>add post</button>
        </div>
    );
};

