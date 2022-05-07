import React from 'react'
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const LoginPage = () => {
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const location = useLocation();
    const redirectPath = location?.state?.from?.pathname || "/";
    // console.log(redirectPath);

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleGoogleAuth = ()=>{
        signInWithGoogle()
    }

    //handling email password auth 
    const handleEmailPassAuthLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(email && password){
            signInWithEmailAndPassword(email, password);
        }
        /* login */
    }

    if(user){
        navigate(redirectPath);
    }

   

    return (
        <div>
            <h1>LoginPage</h1>
            <div className="email-pass-login w-50 mx-auto">
                <h1>Email Pass Login : </h1>
                <form action="" onSubmit={handleEmailPassAuthLogin}>
                    Email : <input type="email" name='email' placeholder='email' /><br/>
                    Password: <input type="password" name='password' placeholder='password' /><br/>
                    <input type="submit" value='submit' />
                    <button onClick={()=>navigate('/sign-up')}>SignUp</button>
                </form>
            </div>
            <hr />
            <button onClick={()=>handleGoogleAuth()} className='btn btn-danger'>Login witn google</button>
        </div>
    )
}

export default LoginPage
