import React from 'react';
import mainContext from "../context/mainContext";
import ShoppingCart from "../components/ShopingCart";
import {useContext, useEffect} from "react";
import "./style.css"


const ShoppingCartPage = () => {

    const {getProductsToCart, getTotalMoney} = useContext(mainContext)

    return (
        <div className="flex column j-center a-cont-center a-center">
            <h1>Your products in shopping cart:</h1>
            {getProductsToCart.map((x, i) => <ShoppingCart product={x} key={i} index={i} />)}

            <h3>Total Money: {getTotalMoney}</h3>
        </div>
    );
};

export default ShoppingCartPage;