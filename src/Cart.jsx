import { useMemo, useState } from 'react'
import './product.css'

export default function Cart(props) {
const [cart, setCart] = useState([]);

function addToCart(product) {
const newCart = [...cart];
const existingProductIndex = newCart.findIndex(
    (p) => p.id === product.id
);
if (existingProductIndex !== -1) {
    newCart[existingProductIndex].quantity++;
} else {
    newCart.push({ ...product, quantity: 1 });
}
setCart(newCart);
}

function removeFromCart(product) {
const newCart = [...cart];
const existingProductIndex = newCart.findIndex(
    (p) => p.id === product.id
);
if (existingProductIndex !== -1) {
    newCart[existingProductIndex].quantity--;
    if (newCart[existingProductIndex].quantity === 0) {
    newCart.splice(existingProductIndex, 1);
    }
    setCart(newCart);
}
}

function clearCart() {
setCart([]);
}

function calculateTotal() {
return cart.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);
}

useMemo(() => {
    calculateTotal()
}, [])

return (
<div>
    <h2>Cart</h2>
    <ul>
    {cart.map((product) => (
        <li key={product.id}>
        {product.title} x {product.quantity} (${product.price * product.quantity}) 
        <button onClick={() => removeFromCart(product)}>Remove</button>
        </li>
    ))}
    </ul>
    {cart.length > 0 && (
    <>
        <p>Total: ${calculateTotal()}</p>
        <button onClick={clearCart}>Clear cart</button>
    </>
    )}
</div>
);
}


