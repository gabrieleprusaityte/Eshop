import React, {useContext} from 'react';
import "./style.css"
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const SingleProduct = ({product, index}) => {

    const {getProductsToCart, setProductsToCart, setTotalProducts, setTotalMoney} = useContext(mainContext)

    const nav = useNavigate()

    function addToCart(product, index) {
        if (!getProductsToCart.includes(product)) {
            getProductsToCart.push(product)
            setProductsToCart([...getProductsToCart])

            product.quantity = 1

            console.log(product)
            console.log(getProductsToCart)
        } else {
            product.quantity = getProductsToCart.find(x=>x.title===product.title).quantity+1





        }

    }



    function goToSingleProduct() {
        nav(`/product/${product.title}`)
    }

    return (
        <div>
            <div className="productContainer" >
                <img onClick={goToSingleProduct} className="img" src={product.photo} alt=""/>
                <div><b>{product.title}</b></div>
                <div>{product.description}</div>
                <div>{product.price}</div>

                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;