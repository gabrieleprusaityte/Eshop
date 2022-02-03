import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";
import SingleProduct from "../components/SingleProduct";


const AllProductsPage = () => {

    const {getNewProduct} = useContext(mainContext)


    return (
        <div className="flex column">
            <div>
                <h1>Please select products:</h1>
            </div>
            <div className="flex">
                {getNewProduct.map((x, i) => <SingleProduct product={x} key={i} index={i}/>)}
            </div>
        </div>
    );
};

export default AllProductsPage;