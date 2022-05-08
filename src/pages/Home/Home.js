import React,{useState,useEffect} from 'react'
import productsData from '../../fake'
import Banner from '../../components/Banner/Banner'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import Footer from '../../components/Footer/Footer'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { useNavigate } from 'react-router-dom'
import useFetchProduct from '../../hooks/useFetchProduct'
import useAppContext from '../../ContextApi/useAppContext'

const Home = () => {

    const {products,setProducts} = useAppContext().data;
    
    //limit product into 6 for home section 
    const homeProductLimit = products.slice(0,6);

    const navigate = useNavigate()
    return (
        <>
            <Banner/>
            {/* <SingleProduct/> */}
            <section className='home-products-manage'>
            
                <div className="container">
                <SectionTitle secTitle="Inventories" secDesc=""/>
                    <div className="row">
                        {
                            homeProductLimit?.length > 0 && homeProductLimit.map((product)=><SingleProduct key={product._id} product={product}/>)
                        }
                        <div className='text-center'><button className='btn btn-success' onClick={()=>navigate('/manage-products')}>Manage All Products</button></div>
                    </div>
                </div>
            </section>
            <Footer/>
            <h1>Extra 2 section</h1>
        </>
    )
}

export default Home
