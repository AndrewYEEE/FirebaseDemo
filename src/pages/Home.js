import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
    const state = useSelector((state)=>{
        return state.user
    });
    return (
        <div>
            <div>🥴 Home Page</div>
            {
                state.profile.login
                ? <div>Hi {state.profile.name}</div>
                : ""
            }
        </div>
    )
};

export default Home;
