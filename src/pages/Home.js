import React from 'react'
import { useSelector } from 'react-redux';
import Movie from './Movie';

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
            <br></br>
            <Movie></Movie>
        </div>
    )
};

export default Home;
