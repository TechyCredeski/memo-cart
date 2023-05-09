import axios from "axios";
import { useEffect, useState } from "react";
import './product.css'

export default function Products() {
const [product, setProduct] = useState([]);

useEffect(() => {
    try{
        axios
    .get("https://fakestoreapi.com/products?limit=5")
    .then((response) => {
        console.log(response.data);
        setProduct(response.data)
    }
)}catch(error) {
    console.log(error);
}
}, [])


return (
<div>
    <div>
    {product.map((currentProduct) => {
return (
<div key={currentProduct.id} className="productContainer">
    < img src={currentProduct.image} alt={currentProduct.title} className="productImg"/>
    <h4 className="productTitle">{currentProduct.title}</h4>
    <p className="productPrice">${currentProduct.price}</p>
</div>
);
})}

    </div>
</div>
);
}
