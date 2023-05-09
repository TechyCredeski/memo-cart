import axios from "axios";
import { useContext, useEffect, useState } from "react";
import './product.css'
import { Cartcontext } from "./Context";

export default function Products() {
const [product, setProduct] = useState([]);

useEffect(() => {
    try{
        axios
    .get("https://fakestoreapi.com/products?limit=8")
    .then((response) => {
        console.log(response.data);
        setProduct(response.data)
    }
)}catch(error) {
    console.log(error);
}
}, [])

const Globalstate = useContext(Cartcontext);
const dispatch = Globalstate.dispatch;


return (
<div>
    <div className="majorCon">
    {product.map((currentProduct) => {
        currentProduct.quantity = 1;
return (
<div key={currentProduct.id} className="productContainer">
    < img src={currentProduct.image} alt={currentProduct.title} className="productImg"/>
    <h4 className="productTitle">{currentProduct.title}</h4>
    <p className="productPrice">${currentProduct.price}</p>

    <button className="cartBtn" onClick={() => dispatch({type: 'ADD_TO_CART', payload: currentProduct})}>Add to cart</button>
</div>
);
})}

    </div>
</div>
);
}
