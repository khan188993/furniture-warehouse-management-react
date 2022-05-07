import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
    const navigate = useNavigate()
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="single-product-manage">
                <div className="img">Img</div>
                <div className="content">
                    <h1>Name : Product 1</h1>
                    <h4>Supplier Name : Arfan Khan</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>1000$ price</span>
                    <span>Quantity: 30</span>
                    <br></br>
                    <button
                        className="btn btn-danger"
                        onClick={() => navigate("/inventory/1")}
                    >
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
