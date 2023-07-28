import React from 'react';
import {Nav} from "./Components/Nav/Nav";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Header} from "./Components/Header/Header";
import s from './App.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {FriendsContainer} from "./Components/Friends/FriendsConainer";


function App() {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Nav/>
                <div className={s.content}>
                    <Route path={'/profile'}
                           render={() => <ProfileContainer/>}>
                    </Route>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}></Route>
                    <Route path={'/friends'} render={() => <FriendsContainer/>}></Route>
                    <Route path={'/music'} render={() => <Music/>}></Route>
                    <Route path={'/settings'} render={() => <Settings/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
