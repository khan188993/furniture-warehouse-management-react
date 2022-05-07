import React from 'react'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SignUpPage = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleEmailPassAuthSignup = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
    }
    
    if(user){
        navigate('/')
    }

    
    return (
        <div>
            <h1>Sing Up With Email password</h1>
            <div className="email-pass-login w-50 mx-auto">
                <h1>Email Pass Login : </h1>
                <form action="" onSubmit={handleEmailPassAuthSignup}>
                    Email : <input type="email" name='email' placeholder='email' /><br/>
                    Password: <input type="password" name='password' placeholder='password' /><br/>
                    Confirm Password: <input type="password" name='confirm-password' placeholder='confirm password' /><br/>
                    <input type="submit" value='submit' />
                    <button onClick={()=>navigate('/login')}>SignUp</button>
                </form>
            </div>
            <hr />
            <button onClick={()=>signInWithGoogle()} className='btn btn-danger'>SignUp witn google</button>
        </div>
    )
}

export default SignUpPage
