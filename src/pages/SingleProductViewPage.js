import React, {useContext} from 'react';
import SingleProduct from "../components/SingleProduct";
import {useParams} from "react-router-dom";
import mainContext from "../context/mainContext";

const SingleProductViewPage = () => {

    const {title} = useParams()
    const {getNewProduct} = useContext(mainContext)

    const productView = getNewProduct.filter(x => x.title === title)

    return (
        <div className="flex column j-center">
            {productView.map((x, i) => <div className="singleProductView" key={i}>
                <img className="img3" src={x.photo} alt=""/>
                <h2 className="no-margin">{x.title}</h2>
                <h3 className="no-margin">{x.description}</h3>
                <h3 className="no-margin">{x.price}</h3>
            </div>)}
        </div>
    );
};

export default SingleProductViewPage;