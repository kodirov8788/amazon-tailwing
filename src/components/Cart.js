import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function Cart() {
    const { state } = useContext(ProductContext)
    const st = {
        cart: " w-2/5 h-full fixed top-0 right-0 bg-blue-400 overflow-y-auto",
        h1: 'text-[50px]'
    }
    console.log("cart >>", state.products);
    return (
        <div className={st.cart}>
            <h1 className={st.h1}>Cart</h1>

            {state.products.map(item => (
                <div className="">
                    <h1>{item.productName}</h1>
                    <img src={item.productImage} alt="" />
                </div>
            ))}

        </div>
    )
}

export default Cart