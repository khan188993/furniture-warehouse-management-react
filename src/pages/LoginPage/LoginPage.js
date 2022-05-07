import React from 'react'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const LoginPage = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const location = useLocation();
    const redirectPath = location?.state?.from?.pathname || "/";
    // console.log(redirectPath);

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleGoogleAuth = ()=>{
        signInWithGoogle()
    }

    if(user){
        navigate(redirectPath);
    }

   

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={()=>handleGoogleAuth()} className='btn btn-danger'>Login witn google</button>
        </div>
    )
}

export default LoginPage
