import React, {useRef} from 'react';
import "./style.css"
import {Link, useNavigate, useParams} from "react-router-dom";

const Toolbar = ({getProductsToCart, getTotalProducts, setTotalProducts}) => {

    const nav = useNavigate()
    const text = useRef()

    function search() {
        nav(text.current.value)
    }


    return (
        <div>
            <div className="toolbar">
                <div className="flex column">
                    <Link className="no-underline" to="/">
                        <div className="box">All Products</div>
                    </Link>
                    <div>
                        <input ref={text} type="text" placeholder="Product Title..."/>
                        <button onClick={search}>Search</button>
                    </div>
                </div>

                <Link className="no-underline" to="/create">
                    <div className="box">Create Product</div>
                </Link>
                <Link className="no-underline" to="/cart">
                    <div className="box">Shopping Cart ({getProductsToCart.length})</div>
                </Link>
            </div>
        </div>
    );
};

export default Toolbar;