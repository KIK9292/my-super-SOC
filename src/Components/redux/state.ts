import {v1} from "uuid";
import {StoreType} from "../Types/Types";

export const Store: StoreType = {
    State: {
        Profile: {
            posts: [
                {id: v1(), title: 'Hello, World!', likesValue: 1},
                {id: v1(), title: 'Hello, country!', likesValue: 2},
                {id: v1(), title: 'Hello, Vite!!', likesValue: 4},
                {id: v1(), title: 'Hello, Germany!', likesValue: 1},
            ]
        },
        Dialogs: {
            dialogs: [
                {id: v1(), name: 'Katy'},
                {id: v1(), name: 'Valera'},
                {id: v1(), name: 'Dima'},
                {id: v1(), name: 'Sergey'},
                {id: v1(), name: 'Misha'},
                {id: v1(), name: 'Lena'},
            ],
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'My name is'},
                {id: v1(), message: 'What is it?'},
                {id: v1(), message: 'YO!'},
                {id: v1(), message: 'YO!MAN!'},
            ]
        }
    }
};

