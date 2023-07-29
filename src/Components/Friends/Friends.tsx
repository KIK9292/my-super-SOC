import React from 'react';
import {FriendsTypeProps} from "./FriendsConainer";
import s from "./Friends.module.css"
import {UserItemsResponseType} from "../redux/friendsReducer";
import logo from '../../Assets/NologoCorrected.png'
import {Preloader} from "../Common/PreLoader/Preloader";

export type FriendsType = {
    friends: UserItemsResponseType[]
}

export const Friends = (props: FriendsType) => {

    console.log(props.friends)
    return (
        <div className={s.cardsFriends}>
            {/*{*/}
            {/*    props.friends.map(el => {*/}
            {/*        return (*/}
            {/*            <div className={s.cardFriends} key={el.id}>*/}
            {/*                <img src={el.photos.small ? el.photos.small : el.photos.large ? el.photos.large : logo}*/}
            {/*                     alt={'FriendLogo'} className={s.cardFriendsImg}/>*/}
            {/*                <h4>{el.name}</h4>*/}
            {/*                <button>{el.followed ? "Followed" : "UnFollowed"}</button>*/}

            {/*            </div>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
            <Preloader/>
        </div>

    );
}

