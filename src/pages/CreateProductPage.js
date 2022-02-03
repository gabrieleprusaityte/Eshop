import React from 'react';
import CreateProduct from "../components/CreateProduct";
import "./style.css"
import {useEffect} from "react";


const CreateProductPage = () => {


    return (
        <div className="flex j-center">
            <CreateProduct />
        </div>
    );
};

export default CreateProductPage;