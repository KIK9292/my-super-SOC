import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {friendsReducer} from "./friendsReducer";



export type RootReducerType=ReturnType<typeof rootReducer>
export const rootReducer=combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    friends:friendsReducer
})

export const store=createStore(rootReducer)