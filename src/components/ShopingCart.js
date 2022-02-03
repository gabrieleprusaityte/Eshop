import React, {useContext, useState} from 'react';
import mainContext from "../context/mainContext";


const ShoppingCart = ({product, index}) => {

    const {getProductsToCart, setProductsToCart, getDeleted, setDeleted, setTotalMoney} = useContext(mainContext)

    function addProduct(product, index) {
        product.quantity = getProductsToCart.find(x => x.title === product.title).quantity + 1

        for (let i = 0; i < getProductsToCart.length; i++) {
            const quantityProduct = (Number(getProductsToCart[i].price) * getProductsToCart[i].quantity)
        }

    }


    function removeProduct(product) {
        if (product.quantity >= 2) {
            product.quantity = getProductsToCart.find(x => x.title === product.title).quantity - 1
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