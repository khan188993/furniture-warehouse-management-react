import React from 'react'

const AddProduct = () => {
    // const {_id,name,price,desc,imgUrl,supplier_name,quantity,sold} = product;
    /* 
    sold value initial 0, quantity input submit will get 
    
    */
   const handleAddProduct = (e)=>{
       e.preventDefault()
       //here will add new product 
   }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-4'>Add Product</h1>
            <div className="form">
                <form action="" onSubmit={handleAddProduct}>
                    product name: <input type="text" name='product_name' placeholder='product_name' /><br></br>
                    price : <input type="text" placeholder='price' name='price' /><br></br>
                    desc : <input type="text" placeholder='desc' name='desc' /><br></br>
                    <input type="submit" value='submit' />
                </form>
            </div>
        </div>
    )
}

export default AddProduct
