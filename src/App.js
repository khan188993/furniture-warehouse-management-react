import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navigate, NavLink, Route,Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import Home from './pages/Home/Home';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import MyProducts from './pages/MyProducts/MyProducts';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import NotFound from './pages/404/NotFound';
import AddProduct from './pages/AddProduct/AddProduct';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase/Firebase.init';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import BlogPage from './pages/BlogPage/BlogPage';
import AppStates from './ContextApi/AppState';
const App = () => {

  const [user] = useAuthState(auth)
  return (
    <AppStates value={{user}} >
      <h1 className='text-center'>React Learning Practice code Running.</h1>
      {/* navigation link making  */}
      <Header/>

      {/* Routes Defining  */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/blogs' element={<BlogPage/>}></Route>
        <Route path='/inventory/:id' element={<PrivateRoute>
          <UpdateProduct/>
        </PrivateRoute>}></Route>
        <Route path='/manage-products' element={<PrivateRoute>
          <ManageProducts/>
        </PrivateRoute>}></Route>
        <Route path='/my-products' element={<PrivateRoute>
          <MyProducts/>
        </PrivateRoute>}></Route>
        <Route path='/add-new-product' element={<AddProduct/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/sign-up' element={<SignUpPage/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>

      </Routes>
    </AppStates>
  )
}

export default App
