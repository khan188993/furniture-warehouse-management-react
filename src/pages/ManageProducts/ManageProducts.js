import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import productsData from '../../fake'
import useFetchProduct from '../../hooks/useFetchProduct'

const ManageProducts = () => {

    
    const {products,setProducts} = useFetchProduct("http://localhost:4000/furniture");
    console.log(products);
    

    const navigate = useNavigate()
    return (
        <section className='manage-products'>
            <h1 className='text-center my-3'>All Product Manage:</h1>
            <div className="container">
                <div className="row">
                    {
                        products.map((product=><SingleProduct products={products} setProducts={setProducts} key={product._id} product={product}/>))
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
