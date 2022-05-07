import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import auth from '../../Firebase/Firebase.init';
import useFetchProduct from '../../hooks/useFetchProduct';

const MyProducts = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const {products,setProducts} = useFetchProduct(`http://localhost:4000/furniture?supplier_name=${user?.displayName}`);

    return (
         <section className='manage-products'>
            <h1 className='text-center my-3'>My Products Manage:</h1>
            <div className="container">
                <div className="row">
                    {
                        products.map((product=><SingleProduct products={products} setProducts={setProducts} key={product._id} product={product}/>))
                    }
                    <div className="text-center">
                        <button onClick={()=>navigate('/add-new-product')}>Add new Items</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyProducts
