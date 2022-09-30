import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { FaTimes } from "react-icons/fa"

function Cart({ sidebarFunc, openSide }) {
    console.log(openSide)
    const { state } = useContext(ProductContext)
    const st = {
        cart: `w-2/5 h-full fixed top-0 right-0 bg-blue-400 overflow-y-auto ${openSide ? "translate-x-[0]" : "translate-x-[540px]"} duration-300 ease-in`,
        h1: 'text-[50px]',
        xmark: "text-[40px] mt-[20px] ml-[20px] bg-red-300  p-[5px] rounded-[10px] cursor-pointer",
    }
    // console.log("cart >>", state.products);
    return (
        <div className={st.cart}>
            <FaTimes className={st.xmark} onClick={sidebarFunc} />
            <h1 className={st.h1}>Cart</h1>

            {state.products.map(item => (
                <div className="" key={item.id}>
                    <h1>{item.data.productName}</h1>
                    <img src={item.data.productImage} alt="" />
                </div>
            ))}

        </div>
    )
}

export default Cart