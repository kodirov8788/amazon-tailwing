import { createContext, useReducer } from "react"

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {

    const boshlanish = {
        products: []
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD__CART":
                return { ...state, products: [...state.products, action.payload] }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, boshlanish)
    console.log(state);

    return (
        <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
    )
}