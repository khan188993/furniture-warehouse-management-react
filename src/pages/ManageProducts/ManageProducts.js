import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import useAppContext from '../../ContextApi/useAppContext'
import productsData from '../../fake'
import useFetchProduct from '../../hooks/useFetchProduct'

const ManageProducts = () => {

    const {user,products,setProducts} = useAppContext().data;
    

    const navigate = useNavigate()
    return (
        <section className='manage-products'>
            <h1 className='text-center my-3'>All Product Manage:</h1>
            <div className="container">
                <div className="row">
                    {
                        products.map(((product,index)=><SingleProduct products={products} setProducts={setProducts} key={index} product={product}/>))
                    }
                    <div className="text-center">
                        <button onClick={()=>navigate('/add-new-product')}>Add new Items</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManageProducts
