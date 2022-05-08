import { sendPasswordResetEmail,signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const LoginPage = () => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const location = useLocation();
    const redirectPath = location?.state?.from?.pathname || "/";
    // console.log(redirectPath);

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleGoogleAuth = ()=>{
        signInWithGoogle()
    }

    //handle email 
    const handleEmail = (event) => {
        const emailInput = event.target.value;
    
        if (/\S+@\S+\.\S+/.test(emailInput)) {
          setEmail({ value: emailInput, error: "" });
        } else {
          setEmail({ value: "", error: "Please Provide a valid Email" });
        }
      };
    
    //handle password
      const handlePassword = (event) => {
        const passwordInput = event.target.value;
    
        setPassword({ value: passwordInput, error: "" });
      };


    //handle login form with custom email and password
    const handleLogin = (event) => {
        event.preventDefault();
    
        if (email.value === "") {
          setEmail({ value: "", error: "Email is required" });
        }
    
        if (password.value === "") {
          setPassword({ value: "", error: "Password is required" });
        }
    
        if (email.value && password.value) {
            signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
              const user = userCredential.user;
                console.log();
              toast.success("Sign In Successfully", { id: "signIn" });
              navigate('/');
            })
            .catch((error) => {
              const errorMessage = error.message;
    
              if (errorMessage.includes("wrong-password")) {
                toast.error("Wrong Password", { id: "error" });
              } else {
                toast.error('may be your email is not registered,please registered first', { id: "error" });
              }
            });
        }
      };

      //handing reset password 
      const handleResetPass = ()=>{
        sendPasswordResetEmail(auth, email.value)
        .then(() => { 
        console.log('reset password');
    })
}

    if(user){
        navigate(redirectPath);
    }

   

    return (
        <div>
            <h1>LoginPage</h1>
            <div className="email-pass-login w-50 mx-auto">
                <h1>Email Pass Login : </h1>
                <form action="" onSubmit={handleLogin}>
                Email new: <input required onBlur={handleEmail} name="email" id="email" placeholder="Email" type="email"/>
                                                {email.error && (<span className="error">{email.error}</span>)}<br/>
                password new: <input required onBlur={handlePassword} name="password" id="password" placeholder="password" type="password"/>
                                                {password.error && (<span className="error">{password.error}</span>)}<br/>
                    <hr />
                    <input type="submit" value='Login' />
                    <button onClick={()=>navigate('/sign-up')}>SignUp</button>
                </form>
            </div>
            <hr />
            <button onClick={handleResetPass} type="submit" className="my-btn">Forget Password</button>
            <button onClick={()=>handleGoogleAuth()} className='btn btn-danger'>Login witn google</button>
        </div>
    )
}

export default LoginPage
