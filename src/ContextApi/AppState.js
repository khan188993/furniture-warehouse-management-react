import React,{useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import useFetchProduct from '../hooks/useFetchProduct';
import MyContext from './AppContext';

const AppStates = (props) => {
    const {products,setProducts} = useFetchProduct('http://localhost:4000/furniture')

    return (
        <MyContext.Provider value={{products,setProducts}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default AppStates
