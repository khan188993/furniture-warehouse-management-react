import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const navigate = useNavigate()
    //this will find by database, 
    const {id} = useParams();

    //delivered api will be here,
    const Delivered = ()=>{
        console.log('delivered');
        //update krbo delivered e click krle quantity ekta decre and sold ekta incre,
    }

    const handleRestockItems = (e)=>{
        e.preventDefault();
        const quantity = e.target.quantity.value;
        console.log(quantity);
        /* if quantity number greater than 0 or not undefined then update backend again, */

    }

    return (
        <div className='text-center'>
            <h1>Update Product id: {id}</h1>
            <button onClick={Delivered}>Delivered</button>
            <button className='btn' onClick={()=>navigate('/manage-products')}>Manage Products</button>
            <div className="form w-50 ml-auto">
                <form action="" onSubmit={handleRestockItems}>
                    Number: <input type="number" name='quantity' placeholder='restock items' /><br></br>
                    <input type="submit" value='submit' />
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct
