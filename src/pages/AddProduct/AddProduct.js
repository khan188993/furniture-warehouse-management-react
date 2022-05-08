import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import useAppContext from '../../ContextApi/useAppContext'
import auth from '../../Firebase/Firebase.init'

const AddProduct = () => {
    const navigate = useNavigate()
    
    const {user,products,setProducts,newAdd,setNewAdd} = useAppContext().data;
    // const {_id,name,price,desc,imgUrl,supplier_name,quantity,sold} = product;
    /* 
    sold value initial 0, quantity input submit will get 
    
    */
   const handleAddProduct = (e)=>{
       e.preventDefault()
       const productName = e.target.product_name.value;
       const productDesc = e.target.desc.value;
       const productImgUrl = e.target.img_url.value;
       const productPrice = e.target.price.value;
       const productQuantity = e.target.quantity.value;
       const productSold = 0;
       const productSupplierName = user?.displayName;
       /* 
       
       zodi sob field properly bore taholei product post krobo noyto krbo na,

       */
        if(productName && productDesc && productImgUrl && productPrice && Number(productQuantity) && productSupplierName){
            const newProduct = {
                name: productName,
                desc: productDesc,
                imgUrl: productImgUrl,
                supplier_name: productSupplierName,
                quantity: productQuantity,
                price: productPrice,
                sold: productSold,
            }

            fetch("http://localhost:4000/furniture", {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then(res=>res.json())
            .then(data=>{
                setProducts([...products,newProduct])
                setNewAdd(newAdd+1);
                console.log(newAdd);
                navigate('/manage-products')
            })
        }

       //here will add new product 
      /*  {
        _id:1,
        name:"product 1",
        desc:'lreasfd asdfadsf ladfjasd fasdfdsf asfasdf',
        imgUrl:'url',
        supplier_name:'Arfan Khan',
        quantity:20,
        price:200,
        sold:5,
    }, */
   }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-4'>Add Product</h1>
            <div className="form">
                <form action="" onSubmit={handleAddProduct}>
                    product name: <input type="text" name='product_name' placeholder='product_name' /><br></br>
                    desc : <input type="text" placeholder='desc' name='desc' /><br></br>
                    imgUrl : <input type="text" placeholder='image url' name='img_url'/><br/>
                    quantity: <input type="number" name='quantity' placeholder='quantity' /><br/> 
                    price : <input type="text" placeholder='price' name='price' /><br></br>
                    <input type="submit" value='submit' />
                </form>
            </div>
        </div>
    )
}

export default AddProduct
