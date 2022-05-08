import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useAppContext from '../../ContextApi/useAppContext';
import useFetchProduct from '../../hooks/useFetchProduct';

const UpdateProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const {products,setProducts} = useFetchProduct('http://localhost:4000/furniture');
    const {quantity,setQuantity,sold,setSold} = useAppContext().data;

    const updateProduct = products?.find((product)=>product._id ==id);


    const handleRestockItems = (e)=>{
        e.preventDefault();
        const quantityNumber = Number(e.target.quantity.value);

        if(quantityNumber > 0){
            //Update quantity data ;
        const updatedQuantityData = {
            name:updateProduct?.name,
            desc:updateProduct?.desc,
            imgUrl:updateProduct?.imgUrl,
            price:updateProduct?.price,
            supplier_name:updateProduct?.supplier_name,
            quantity:(quantity || updateProduct?.quantity) + quantityNumber,
            sold:updateProduct?.sold,
        }
        console.log(updatedQuantityData);
        fetch(`http://localhost:4000/furniture/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedQuantityData),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((data) => {

                    setQuantity(updatedQuantityData.quantity);
                    e.target.reset();
                });
        }

    }


    const delivered = (id)=>{
        if(updateProduct.quantity > 0){
            const updatedData = {
                name:updateProduct?.name,
                desc:updateProduct?.desc,
                imgUrl:updateProduct?.imgUrl,
                price:updateProduct?.price,
                supplier_name:updateProduct?.supplier_name,
                quantity:(quantity || updateProduct?.quantity) - 1,
                sold:(sold || updateProduct?.sold) + 1,
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
                        setQuantity(updatedData.quantity);
                        setSold(updatedData.sold)
                    });
        }else{
            console.log('Stoke Out Can not delivered');
        }
        
    }
    
/*     const Delivered = (id)=>{

            //Quantity updating 
            // setQuantity((Number(updateProduct.quantity)-1).toString());
            // setSold((Number(updateProduct.sold)+1));
            setQuantity(updateProduct.quantity);
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
                    // setQuantity(updatedData.quantity);
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

    // } */

    return (
        <div className='text-center'>
            <h1>Update Product id: {id}</h1>
            <h2>Name : {updateProduct?.name}</h2>
            <span>Quantity : {quantity || updateProduct?.quantity}</span><br/>
            <span>sold : {sold || updateProduct?.sold}</span><br/>
            <button onClick={()=>delivered(id)}>Delivered</button>
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
