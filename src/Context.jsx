import { createContext, useReducer } from "react";

export const Cartcontext = createContext()
export const Context = (props) => {
    const reducerc = [state, action] => {
        switch (action.type) {
    }

    const [state, dispatch] = useReducer(reducer, [])
    const info ={}
    return (
        <Cartcontext.Provider value={state}>{props.children}</Cartcontext.Provider>
    )
}