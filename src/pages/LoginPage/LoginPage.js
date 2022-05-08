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
        <>
            <section className="form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                        <form  onSubmit={handleLogin}>
                        <h1 className='text-center'>Login Form </h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input required onBlur={handleEmail} id="exampleInputEmail1" className="form-control" name="email" placeholder="Email" type="email"/>
    <div id="emailHelp" className="form-text">{email.error && (<span className="error">{email.error}</span>)}</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input required onBlur={handlePassword} className="form-control" name="password" id="password" placeholder="password" type="password"/>
    <div id="emailHelp" className="form-text">{password.error && (<span className="error">{password.error}</span>)}</div>
  </div>
  <input type="submit" className="btn btn-primary" value='Login' />
<button className='btn btn-link' onClick={()=>navigate('/sign-up')}>Create New Account</button>
</form>
                        </div>
                    </div>
                </div>
            </section>
           </>
    )
}

export default LoginPage
