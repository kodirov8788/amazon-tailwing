import { createContext, useReducer } from "react"

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const boshlanish = {
        productName: "",
        products: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD__CART":
                return { ...boshlanish, products: action.payload, productName: "product1" }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, boshlanish)

    return (
        <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
    )
}