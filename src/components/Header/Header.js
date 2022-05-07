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
        <header>
        <div className="container">
          <div className="row">
          <div className="col-md-3">
            <span>
                <NavLink to="/">Logo</NavLink>
            </span>
          </div>
          <div className="col-md-9">
              <nav>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs">Blogs</NavLink>
                  </li>
                  {
                      user ? (
                          <>
                            <li>
                    <NavLink to="/manage-products">manage Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-products">My Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/add-new-product">Add New Product</NavLink>
                  </li>
                  <li>
                      <span>img</span>
                      <span>{user.displayName}</span>
                  </li>
                  <li>
                      <button className='btn btn-danger' onClick={()=>handleLogOut()}>LogOut</button>
                  </li>
                          </>
                      ):
                      <>
                        <li>
                    <button className='btn btn-success' onClick={()=>navigate('/login')}>Login</button>
                  </li>
                  <li>
                    <button className='btn btn-dark' onClick={()=>navigate('/sign-up')}>SignUp</button>
                  </li>
                      </>
                  }
                  
                </ul>
              </nav>
          </div>
          </div>
        </div>
      </header>
    )
}

export default Header
