import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../libs/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setLogin } from '../components/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        dispatch(setLogin({
            name: result.user.displayName,
            email: result.user.email,
            login: true,
        }));
        navigate("/");
    }

    return (
        <div>
            <div>😇 Login Page</div>
            <button onClick={login}>Login</button>
        </div>
    )
};

export default Login;
