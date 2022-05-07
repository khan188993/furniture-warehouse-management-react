import React, { useState, useEffect } from "react";

const useFetchProduct = (url) => {
    const [products, setProducts] = useState([]);

    //FETCHING DATA
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return {products, setProducts};
};

export default useFetchProduct;
