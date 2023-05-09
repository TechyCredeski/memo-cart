import { current } from "@reduxjs/toolkit";
import { createContext, useReducer } from "react";

export const Cartcontext = createContext();

export const Context = (props) => {
const reducer = (state, action) => {
switch (action.type) {
    case "ADD_TO_CART":
    const tempState = state.filter((currentProduct) => action.payload.id === currentProduct.id);
    if (tempState.length > 0) {
        return state;
    } else {
        return [...state, action.payload]
    }
    
    case 'INCREASE':
    const increaseState = state.map((currentProduct) => {
        if (currentProduct.id === action.payload.id) {
            return { ...currentProduct, quantity: currentProduct.quantity + 1 }
        } else {
            return currentProduct;
        }
    });
    return increaseState;

    case 'DECREASE':
        const decreaseState = state.map((currentProduct) => {
            if (currentProduct.id === action.payload.id) {
                return { ...currentProduct, quantity: currentProduct.quantity - 1 }
            } else {
                return currentProduct;
            }
        });
        return decreaseState;

        case 'REMOVE_FROM_CART':
        const removeState = state.filter((currentProduct) => currentProduct.id !== action.payload.id);
        return removeState;



    default:
    return state;
}
}; 

const [state, dispatch] = useReducer(reducer, []);
const info = { state, dispatch };
return (
<Cartcontext.Provider value={info}>
    {props.children}
</Cartcontext.Provider>
);
};
