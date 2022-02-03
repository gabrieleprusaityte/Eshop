import React, {useContext, useState} from 'react';
import mainContext from "../context/mainContext";

const ShoppingCart = ({product, index}) => {

    const {getProductsToCart, setProductsToCart, getDeleted, setDeleted, getTotalMoney, setTotalMoney} = useContext(mainContext)
    const [getTotalProd, setTotalProd] = useState([])

    function addProduct(product) {
        product.quantity.push(product)
        console.log(product)
        console.log(getProductsToCart)
        setTotalMoney(product.price * product.quantity.length)
        }

    function removeProduct(product) {
            setDeleted([...getDeleted, product])
            const deletedProduct = getProductsToCart.filter((x, i) => i)
            setProductsToCart([...deletedProduct])
            setTotalMoney(0)

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
                        Quantity: {product.quantity.length}
                    </h3>
                </div>

                <div className="flex">
                    <button className="btn2" onClick={() => addProduct(product)}>Add</button>
                </div>
                <div className="flex">
                    <button className="btn2" onClick={removeProduct}>Remove</button>
                </div>

            </div>

        </div>
    );
};

export default ShoppingCart;