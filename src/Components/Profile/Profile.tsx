import React from 'react';
import {Posts} from "./Posts/Posts";
import {AddPostArea} from "./AddPostArea/AddPostArea";
import {ProfilePropsType} from "./ProfileContainer";


export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <br/>
            <div>Profile</div>
            <div>ava+desc</div>
            <AddPostArea
                changeInputPostValue={props.changeInputPostValue}
            inputValue={props.profile.postValue}
            addPost={props.addPost}
            />
            <Posts posts={props.profile.posts}/>
            <br/>
        </div>
    );
};

