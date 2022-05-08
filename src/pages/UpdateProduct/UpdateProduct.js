import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useAppContext from '../../ContextApi/useAppContext';

const UpdateProduct = () => {
    const navigate = useNavigate()
    const {quantity,setQuantity,sold,setSold,products} = useAppContext().data;
    //this will find by database, 
    const {id} = useParams();
    const updateProduct = products.find((product)=>product._id ==id);

    const Delivered = (id)=>{

            //Quantity updating 
            // setQuantity((Number(updateProduct.quantity)-1).toString());
            // setSold((Number(updateProduct.sold)+1));

            const updatedData = {
                name:updateProduct.name,
                desc:updateProduct.desc,
                imgUrl:updateProduct.imgUrl,
                price:updateProduct.price,
                supplier_name:updateProduct.supplier_name,
                quantity:updateProduct.quantity - 1,
                sold:updateProduct.sold +1,
            }

            fetch(`http://localhost:4000/furniture/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedData),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                });

        //update krbo delivered e click krle quantity ekta decre and sold ekta incre,
    }

    const handleRestockItems = (e)=>{
        e.preventDefault();
        const quantityNumber = e.target.quantity.value;
        //21 set after hit button 
        console.log(updateProduct.quantity,'qu',quantity);
        // console.log(quantity,"quantity");
        if(Number(quantityNumber) > 0){
            // http://localhost:4000/furniture/update/2
            const updatedData = {
                name:updateProduct.name,
                desc:updateProduct.desc,
                imgUrl:updateProduct.imgUrl,
                price:updateProduct.price,
                supplier_name:updateProduct.supplier_name,
                quantity:updateProduct.quantity + Number(quantityNumber),
                sold:updateProduct.sold,
            }

            fetch(`http://localhost:4000/furniture/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedData),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((data) => {
                    console.log('all data',data);
                    // setQuantity(Number(quantity) + Number(quantityNumber))
                    e.target.reset();
                });
        }
        /* if quantity number greater than 0 or not undefined then update backend again, */

    }

    return (
        <div className='text-center'>
            <h1>Update Product id: {id}</h1>
            <h2>Name : {updateProduct.name}</h2>
            <span>Quantity : {quantity || updateProduct.quantity}</span><br/>
            <span>sold : {sold || updateProduct.sold}</span><br/>
            <button onClick={()=>Delivered(id)}>Delivered</button>
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
