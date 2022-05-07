import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';


const LoginPage = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleAuth = ()=>{

    }
    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={()=>signInWithGoogle()} className='btn btn-danger'>Login witn google</button>
        </div>
    )
}

export default LoginPage
