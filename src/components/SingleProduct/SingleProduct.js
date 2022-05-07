import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SingleProduct = ({product,setProducts,products}) => {
    const path = useLocation().pathname;
    const {_id,name,price,desc,imgUrl,supplier_name,quantity,sold} = product;

    const navigate = useNavigate()

    const handleDeleteProduct = (id)=>{
        console.log(id);
        // http://localhost:4000/furniture/delete/1
        fetch(`http://localhost:4000/furniture/delete/${id}`, {
            method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                const newProduct = products.filter((product)=>product._id!=id);
                console.log(newProduct);
                //product deleted and set 
                setProducts(newProduct)
            })
        //this will delete the product by fetch delete method ,
    }

    return (
        <div className="col-lg-4 col-md-6 col-12 my-3">
            <div className="single-product-manage">
                <div className="img">{imgUrl}</div>
                <div className="content">
                    <h1>Name : {name}</h1>
                    <h4>Supplier Name : {supplier_name}</h4>
                    <p>{desc}</p>
                    <span>{price}$ price</span>
                    <span>Quantity: {quantity}</span>
                    <br></br>
                    {
                        path.includes('manage-products') ? (
                            <button onClick={()=>handleDeleteProduct(_id)} className="btn btn-danger">
                                Delete Product
                            </button>
                        ):
                        (
                            <button
                        className="btn btn-danger"
                        onClick={() => navigate(`/inventory/${_id}`)}
                    >
                        Update Product
                    </button>
                        )
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
