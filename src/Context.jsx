import { createContext } from "react";

export const Cartcontext = createContext()
export const Context = (props) => {

    const state = []
    return (
        <Cartcontext.Provider value={state}>{props.children}</Cartcontext.Provider>
    )
}