import { createContext, useReducer } from "react";

export const Cartcontext = createContext();

export const Context = (props) => {
const reducer = (state, action) => {
switch (action.type) {
    case "ADD_TO_CART":
    // TODO: handle adding item to cart
    return state;
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
