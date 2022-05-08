import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState,} from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../Firebase/Firebase.init';
/* 
logo,
about,add new product,manage products,my products,

*/
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = ()=>{
        signOut(auth)
    }

    return (
        <>
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4">
                                <div  className="logo">
                                    <NavLink to='/'>Furniture</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-8">
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <NavLink to="/about">
                                                    About
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/blogs">
                                                    Blogs
                                                </NavLink>
                                            </li>
                                            {/* <li><NavLink to="/contact">Contact</NavLink></li>
                      <li><NavLink to="/">Faq</NavLink></li> */}
                                            {user ? (
                                                <>
                                                    <li>
                                                        <NavLink to="/manage-products">
                                                            manage Products
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/my-products">
                                                            My Products
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/add-new-product">
                                                            Add New Product
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <span className='user-name'>
                                                            {user.displayName}
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="mybtn"
                                                            onClick={() =>
                                                                handleLogOut()
                                                            }
                                                        >
                                                            LogOut
                                                        </button>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li>
                                                        <button
                                                            className="mybtn"
                                                            onClick={() =>
                                                                navigate(
                                                                    "/login"
                                                                )
                                                            }
                                                        >
                                                            Login
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="mybtn mybtn-2"
                                                            onClick={() =>
                                                                navigate(
                                                                    "/sign-up"
                                                                )
                                                            }
                                                        >
                                                            SignUp
                                                        </button>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        </>
    );
}

export default Header
