import React from 'react'
import { useNavigate } from 'react-router-dom'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import productsData from '../../fake'

const ManageProducts = () => {
    const navigate = useNavigate()
    return (
        <section className='manage-products'>
            <h1 className='text-center my-3'>All Product Manage:</h1>
            <div className="container">
                <div className="row">
                    {
                        productsData.map((product=><SingleProduct key={product._id} product={product}/>))
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
