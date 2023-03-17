import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../libs/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { setLogout } from '../components/userSlice';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const LogoutHandle= async ()=>{
        await signOut(auth);
        console.log(auth);
        dispatch(setLogout());
        navigate('/');
    }
    return (
    <div>
      <button onClick={LogoutHandle}>Logout</button>
    </div>
  )
}

export default Logout
