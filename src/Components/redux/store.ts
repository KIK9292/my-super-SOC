import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";



export type RootReducerType=ReturnType<typeof rootReducer>
export const rootReducer=combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer
})

export const store=createStore(rootReducer)