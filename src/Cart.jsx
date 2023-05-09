import { useContext } from 'react';
import { Cartcontext } from './Context';
import './product.css'

export default function Cart() {
const Globalstate = useContext(Cartcontext);
const state = Globalstate.state;
const dispatch = Globalstate.dispatch;

return (
<div>
    <h1 className='crtTitle'>Cart</h1>

    <div>
        {state.map((currentProduct, index) => {
            return (
                <div key={index} className='cartItem'>
                    <img src={currentProduct.image} alt="" />
                    <h4>{currentProduct.title}</h4>
                    <p>{currentProduct.price * currentProduct.quantity}</p>

                    <button onClick={() => dispatch({type: 'INCREASE', payload: currentProduct})}>+</button>
                    <p>{currentProduct.quantity}</p>
                    <button>-</button>
                    <p></p>
                    <div>
                    <button className="cartBtn" onClick={() => dispatch({type: 'REMOVE_FROM_CART', id: currentProduct.id})}>Remove</button>
                    </div>
                    
                </div>
            )
        })}
    </div>
</div>
);
}


