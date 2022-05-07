import React from 'react'
import Banner from '../../components/Banner/Banner'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import Footer from '../../components/Footer/Footer'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <Banner/>
            {/* <SingleProduct/> */}
            <section className='home-products-manage'>
            
                <div className="container">
                <SectionTitle secTitle="Inventories" secDesc="Inventories Descriptions"/>
                    <div className="row">
                        <SingleProduct/>
                        <SingleProduct/>
                        <SingleProduct/>
                    </div>
                </div>
            </section>
            <Footer/>
            <h1>Extra 2 section</h1>
        </>
    )
}

export default Home
