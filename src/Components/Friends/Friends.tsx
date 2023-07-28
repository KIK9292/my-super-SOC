import React from 'react';
import {FriendsTypeProps} from "./FriendsConainer";
import s from "./Friends.module.css"


export const Friends = (props: FriendsTypeProps) => {
    return (
        <div className={s.cardsFriends}>
            {props.friends.users.map(el => {
                const onClickHandler=()=>{
                    props.newStatusSubscribe(el.id,!el.followed)
                }
                return (
                    <div className={s.cardFriends} key={el.id}>
                        <img src={el.photoUrl} alt="FriendLogo" className={s.cardFriendsImg}/>
                        <span>{el.fullName}</span>
                        <span>{el.status}</span>
                        <span>{`${el.location.city}, ${el.location.country}`}</span>
                        <button onClick={onClickHandler} >{el.followed?"Fallowed":"not signed"}</button>
                    </div>
                )
            })}
        </div>

    );
}

