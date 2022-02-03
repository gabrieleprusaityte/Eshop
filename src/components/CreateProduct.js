import React, {useContext, useRef} from 'react';
import "./style.css"
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {

    const {getError, setError, getNewProduct, setNewProduct} = useContext(mainContext)


    const title = useRef()
    const description = useRef()
    const photo = useRef()
    const price = useRef()

    function createProduct() {
        if (title.current.value.length === 0) return setError("Please fill in Title box")
        if (description.current.value.length === 0) return setError("Please fill in Description box")
        if (photo.current.value.length === 0) return setError("Please fill in Photo box")
        if (price.current.value.length === 0) return setError("Please fill in Price box")
        setError(null)

        const newProduct = {
            title: title.current.value,
            description: description.current.value,
            photo: photo.current.value,
            price: price.current.value,
            quantity: 1

        }
        setNewProduct([...getNewProduct, newProduct])

    }

    return (
        <div>
            <div className="container">
                <h1>Create a new product:</h1>
                <input ref={title} className="input" type="text" placeholder="Title"/>
                <input ref={description} className="input" type="text" placeholder="Description"/>
                <input ref={photo} className="input" type="text" placeholder="Photo"/>
                <input ref={price} className="input" type="text" placeholder="Price"/>
                <h3 className="color-red">{getError}</h3>

                <button onClick={createProduct} className="btn">Create Product</button>
            </div>

        </div>
    );
};

export default CreateProduct;