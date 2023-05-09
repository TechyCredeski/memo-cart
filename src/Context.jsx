import { createContext } from "react";

export const cartContext = createContext()
export const context = (props) => {

    const state = []
    return (
        <cartContext.Provider value={state}>{props.children}</cartContext.Provider>
    )
}