import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, Route,Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import Home from './pages/Home/Home';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import MyProducts from './pages/MyProducts/MyProducts';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import NotFound from './pages/404/NotFound';
import AddProduct from './pages/AddProduct/AddProduct';
import PrivateRoute from './PrivateRoute/PrivateRoute';
const App = () => {
  return (
    <>
      <h1 className='text-center'>React Learning Practice code Running.</h1>
      {/* navigation link making  */}
      <header>
        <div className="container">
          <div className="row">
          <div className="col-md-3">
            <span>Logo</span>
          </div>
          <div className="col-md-9">
              <nav>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
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
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sign-up">Signup</NavLink>
                  </li>
                </ul>
              </nav>
          </div>
          </div>
        </div>
      </header>

      {/* Routes Defining  */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/manage-products' element={<PrivateRoute>
          <ManageProducts/>
        </PrivateRoute>}></Route>
        <Route path='/my-products' element={<MyProducts/>}></Route>
        <Route path='/add-new-product' element={<AddProduct/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/sign-up' element={<SignUpPage/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>

      </Routes>
    </>
  )
}

export default App
