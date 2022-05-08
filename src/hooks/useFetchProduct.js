import React, { useState, useEffect } from "react";

const useFetchProduct = (url) => {
    const [newAdd,setNewAdd] = useState(0);
    const [products, setProducts] = useState([]);

    //FETCHING DATA
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, [newAdd]);

    return {products, setProducts,newAdd,setNewAdd};
};

export default useFetchProduct;
