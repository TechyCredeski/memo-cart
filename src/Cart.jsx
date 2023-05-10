import { useContext } from 'react';
import { Cartcontext } from './Context';
import './product.css'

export default function Cart() {
const Globalstate = useContext(Cartcontext);
const state = Globalstate.state;
const dispatch = Globalstate.dispatch;

const total = state.reduce((total, currentProduct) => {
        return total+currentProduct.price * currentProduct.quantity
    }, 0).toFixed(2)

return (
<div className='crtMain'>
    <h1 className='crtTitle'>Cart</h1>
    <div className='crtCon'>
        {state.map((currentProduct, index) => {
            return (
                <div key={index} className='cartItem'>
                    <div>
                    <img src={currentProduct.image} alt=""  className='productImg'/>
                    <h3>{currentProduct.title}</h3>
                    </div>
                    <p>${currentProduct.price * currentProduct.quantity}</p>

                    <div>
                    <button onClick={() => dispatch({type: 'INCREASE', payload: currentProduct})}>+</button>
                    <p>{currentProduct.quantity}</p>
                    <button onClick={() => {
                        if (currentProduct.quantity > 1) {
                            dispatch({type: 'DECREASE', payload: currentProduct})
                        } else {
                            dispatch({type: 'REMOVE_FROM_CART', payload: currentProduct})
                        }
                        
                    }}>-</button>
                    </div>
                    <div>
                    <button className="cartBtn" onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: currentProduct})}>Remove</button>
                    </div>
                    
                </div>
            )        
        })}

        {state.length > 0 && (
            <div>
                <h1>{total}</h1>
            </div>
        )}
    </div>
</div>
);
}


