import React from 'react'
import { auth } from '../libs/firebase'
import { useSelector} from 'react-redux';

const User = () => {
    const state = useSelector(state=>{
        return state.user
    });

    return (
        <div>
            <div>😀 User Page</div>
            <p>{state.profile.login ? state.profile.name : ""}</p>
            <p>{state.profile.login ? state.profile.email : ""}</p>
            <img src={state.profile.login ? auth?.currentUser?.photoURL : ""} alt='profile'></img>
        </div>
    )
}

export default User
