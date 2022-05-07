import React,{useContext} from 'react'
import useAppContext from '../../ContextApi/useAppContext'


const AboutPage = () => {
    const {data} = useAppContext();
    console.log(data);
    return (
        <div>
            <h1>About Page</h1>
        </div>
    )
}

export default AboutPage
