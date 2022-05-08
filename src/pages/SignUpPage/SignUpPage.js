import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React,{useState} from 'react'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SignUpPage = () => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: "",
        error: "",
      });
    console.log('email',email,'password',password,'confirm',passwordConfirmation)
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);

     //Email Input Handling
     const handleEmail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
          setEmail({ value: emailInput, error: "" });
        } else {
          setEmail({ value: "", error: "Please Provide a valid Email" });
        }
      };

      //Password Input Handling
      const handlePassword = (event) => {
        const passwordInput = event.target.value;
    
        if (passwordInput.length < 7) {
          setPassword({ value: "", error: "Password too short" });
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
          setPassword({
            value: "",
            error: "Password must contain a capital letter",
          });
        } else {
          setPassword({ value: passwordInput, error: "" });
        }
      };

      //Confirm Pass Handling
      const handleConfirmPassword = (event) => {
        const confirmationInput = event.target.value;
    
        if (confirmationInput !== password.value) {
          setPasswordConfirmation({ value: "", error: "Password Mismatched" });
        } else {
          setPasswordConfirmation({ value: confirmationInput, error: "" });
        }
      };

      /* const handleSignUp = (e)=> {
        e.preventDefault()
      } */

      //handle singup form
    const handleSignUp = (e) => {
        e.preventDefault();
        //handing SignUp empty submit
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
          }
          if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
          }
          if (passwordConfirmation.value === "") {
            setPasswordConfirmation({
              value: "",
              error: "Password confirmation is required",
            });
          }
          if (email.value && password.value === passwordConfirmation.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
              .then((userCredential) => {
                const user = userCredential.user;
                toast.success("Account created", { id: "created" });
                //after sign up redirect to home page 
                navigate("/");
                verifiedEmail();
              })
              .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage.includes("already-in-use")) {
                  toast.error("Email already in use", { id: "error" });
                } else {
                  toast.error("somethings doing wrong", { id: "error" });
                }
              });
          }


        
    };

    //Verification Email Sending
    const verifiedEmail = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log(auth.currentUser);
        });
     }

    
    if(user){
        navigate('/')
    }

    
    return (
        <div>
            <h1>Sing Up With Email password</h1>
            <div className="email-pass-login w-50 mx-auto">
                <h1>Email Pass Login : </h1>
                <form action="" onSubmit={handleSignUp}>
                Email new: <input required onBlur={handleEmail} name="email" id="email" placeholder="Email" type="email"/>
                                                {email.error && (<span className="error">{email.error}</span>)}<br/>
                password new: <input required onBlur={handlePassword} name="password" id="password" placeholder="password" type="password"/>
                                                {password.error && (<span className="error">{password.error}</span>)}<br/>
                confirm password new: <input required onBlur={handleConfirmPassword} name="passwordConfirmation" id="passwordConfirmation" placeholder="passwordConfirmation" type="password"/>
                                                {passwordConfirmation.error && (<span className="error">{passwordConfirmation.error}</span>)}<br/>
                    <hr />
                    {/* Email : <input type="email" name='email' placeholder='email' /><br/>
                    Password: <input type="password" name='password' placeholder='password' /><br/>
                    Confirm Password: <input type="password" name='confirm-password' placeholder='confirm password' /><br/> */}
                    <input type="submit" value='submit' />
                    <button onClick={()=>navigate('/login')}>Login</button>
                </form>
            </div>
            <hr />
            <button onClick={()=>signInWithGoogle()} className='btn btn-danger'>SignUp witn google</button>
        </div>
    )
}

export default SignUpPage
