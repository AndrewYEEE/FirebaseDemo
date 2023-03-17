import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../libs/firebase';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => {
        return state.user
    })
    return (
        <div>
            <Link to='/'>Home</Link>
            | {
                state.profile.login
                    ? <Link to='logout'>Logout</Link>
                    : <Link to='login'>Login</Link>
            }
            | {
                state.profile.login
                && <Link to='/user'>User</Link>
            }
        </div>
    )
}
export default Navbar


