import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAppContext from "../../ContextApi/useAppContext";

const SingleProduct = ({product}) => {
    const {products,setProducts,setMyProducts,myProducts,user} = useAppContext().data;
    // console.log(user.displayName);
    const path = useLocation().pathname;
    const {_id,name,price,desc,imgUrl,supplier_name,quantity,sold} = product;

    const navigate = useNavigate()

    const handleDeleteProduct = (id)=>{
        console.log(id);
        // http://localhost:4000/furniture/delete/1
        let isTrue = window.confirm('Do you want to delete');
        if(isTrue){
            fetch(`http://localhost:4000/furniture/delete/${id}`, {
            method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                const newProduct = products.filter((product)=>product._id!=id);
                const newMyProduct = myProducts.filter((product)=>product._id!=id);
                console.log(newProduct);
                //product deleted and set 
                setProducts(newProduct)
                setMyProducts(newMyProduct);
            })
        }
        //this will delete the product by fetch delete method ,
    }

    return (
        <>
        
        <div className="col-lg-4 col-md-6 col-12 my-3">
        <div className="card shadow-sm">
        <img className="card-img-top" src={imgUrl} alt="Card image cap"/>
            <div className="card-body">
                <h1 className="card-heading">{name}</h1>
              <p className="card-text">{desc}</p>
              <span>Price : {price}$</span>
                    <span>Sold Items: {sold} </span>
                    <span>Quantity: {quantity}</span>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                {
                        (path.includes("manage-products") ||
                        path.includes("my-products") )?(
                            <button
                            onClick={() => handleDeleteProduct(_id)}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Delete Product
                        </button>
                        ):(
                            <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => navigate(`/inventory/${_id}`)}
                        >
                            Update Product
                        </button>
                        )
                    }
                </div>
                <small className="text-muted">{supplier_name}</small>
              </div>
            </div>
          </div>
        </div>
        {/* register user can see this button */}
                    {/* {user?.displayName != supplier_name ? (
                        <></>
                    ) : path.includes("manage-products") ||
                      path.includes("my-products") ? (
                        <button
                            onClick={() => handleDeleteProduct(_id)}
                            className="btn btn-danger"
                        >
                            Delete Product
                        </button>
                    ) : (
                        <button
                            className="btn btn-danger"
                            onClick={() => navigate(`/inventory/${_id}`)}
                        >
                            Update Product
                        </button>
                    )} */}
        </>
        
    );
};

export default SingleProduct;



