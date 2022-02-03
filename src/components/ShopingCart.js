import React, {useContext, useState} from 'react';
import mainContext from "../context/mainContext";


const ShoppingCart = ({product, index}) => {

    const {getProductsToCart, setProductsToCart, getDeleted, setDeleted, setTotalMoney} = useContext(mainContext)

    function addProduct(product, index) {
        getProductsToCart[index].quantity++
        setProductsToCart([...getProductsToCart])
    }


    function removeProduct(product) {
        if (product.quantity >= 2) {
            getProductsToCart[index].quantity--
            setProductsToCart([...getProductsToCart])
        } else {
            setDeleted([...getDeleted, product])
            const deletedProduct = getProductsToCart.filter((x, i) => i)
            setProductsToCart([...deletedProduct])
            setTotalMoney(0)
        }
    }

    return (
        <div>
            <div className="productInCart">
                <div className="flex">
                    <img className="img2" src={product.photo} alt=""/>
                </div>
                <div className="flex box2">
                    <h3>Title: {product.title}</h3>
                </div>
                <div className="flex box2">
                    <h3>Price: {product.price}</h3>
                </div>
                <div className="flex box2">
                    <h3>
                        Quantity: {product.quantity}
                    </h3>
                </div>

                <div className="flex">
                    <button className="btn2" onClick={() => addProduct(product, index)}>Add</button>
                </div>
                <div className="flex">
                    <button className="btn2" onClick={() => removeProduct(product, index)}>Remove</button>
                </div>

            </div>

        </div>
    );
};

export default ShoppingCart;