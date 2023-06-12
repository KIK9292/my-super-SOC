import React from 'react';
import {Nav} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Header} from "./Components/Header/Header";
import s from './App.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./Components/Types/Types";


type AppPropsType={
    store:StoreType
}

function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Nav/>
                <div className={s.content}>
                    <Route path={'/profile'} render={() => <Profile posts={props.store.State.Profile.posts}/>}></Route>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.store.State.Dialogs}/>}></Route>
                    <Route path={'/music'} render={() => <Music/>}></Route>
                    <Route path={'/settings'} render={() => <Settings/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
