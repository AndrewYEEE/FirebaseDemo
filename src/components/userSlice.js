import React from 'react'
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    profile:{
        name:"",
        email: "",
        login: false,
    }
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{
        setLogin(state,action){
            state.profile = {
                name: action.payload.name,
                email: action.payload.email,
                login: action.payload.login,
            }
        },
        setLogout(state){
            state.profile = {
                ...initialState.profile
            }
        }
    }
})

export const {setLogin,setLogout}=userSlice.actions;
export default userSlice;
