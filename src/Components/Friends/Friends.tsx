import React from 'react';
import {FriendsTypeProps} from "./FriendsConainer";
import s from "./Friends.module.css"
import {UserItemsResponseType} from "../redux/friendsReducer";
import logo from '../../Assets/NologoCorrected.png'
import {Preloader} from "../Common/PreLoader/Preloader";

export type FriendsType = {
    friends: UserItemsResponseType[]
    preloaderdStatus:boolean
    currentPage: number
    nameButtonArray:number[]
    onPageChange:(newPage:number)=>void

}

export const Friends = (props: FriendsType) => {


    return (
        <div >
            <div className={s.cardsFriends}>{props.preloaderdStatus ? <Preloader/> :
                props.friends.map(el => {
                    return (
                        <div className={s.cardFriends} key={el.id}>
                            <img src={el.photos.small ? el.photos.small : el.photos.large ? el.photos.large : logo}
                                 alt={'FriendLogo'} className={s.cardFriendsImg}/>
                            <h4>{el.name}</h4>
                            <button>{el.followed ? "Followed" : "UnFollowed"}</button>

                        </div>
                    )
                })
            }</div>
            {props.nameButtonArray.map(el=>{
                return(
                    <button disabled={props.currentPage===el} onClick={()=>props.onPageChange(el)} key={el}>{el}</button>
                )
            })}
        </div>

    );
}

