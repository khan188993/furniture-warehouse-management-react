import React,{useState} from 'react';
import MyContext from './AppContext';

const AppStates = (props) => {
    const [userName, setUserName] = useState("arfan khan");



    return (
        <MyContext.Provider value={{userName,setUserName}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default AppStates
