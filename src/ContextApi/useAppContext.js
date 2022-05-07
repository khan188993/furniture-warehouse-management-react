import React,{useContext} from 'react';
import MyContext from './AppContext';

const useAppContext = ()=>{
    const data = useContext(MyContext)
    return {data};
}

export default useAppContext;
