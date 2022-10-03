import { createContext, useReducer } from "react"

export const ProductContext = createContext();


export const addToCart = (product, cart) => {
    const check = cart.every((item) => {
        return item.id !== product.id;
    });

    if (!check)
        return console.log("error >>");

    return { type: "ADD_CART", payload: [...cart, { ...product, quantity: 1, price: product.data.productPrice }] };
};



export const decrease = (data, id) => {
    const newData = [...data];
    newData.forEach((item) => {
        if (item.id === id) item.quantity -= 1;
    });

    return { type: "ADD_CART", payload: newData };
};

export const increase = (data, id) => {
    const newData = [...data];
    newData.forEach((item) => {
        if (item.id === id) { return item.quantity += 1 }
    });

    return { type: "ADD_CART", payload: newData };
};

export const deleteItem = (data, id, type) => {
    const newData = data.filter((item) => item.id !== id);
    return { type, payload: newData };
};


export const ProductContextProvider = ({ children }) => {

    const boshlanish = {
        cart: []
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_CART":
                return {
                    ...state,
                    cart: action.payload,
                };
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, boshlanish)

    return (
        <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
    )
}