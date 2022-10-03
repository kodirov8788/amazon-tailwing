import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { FaTimes } from 'react-icons/fa'

import CartItem from './CartItem'
import { useEffect } from 'react'

function Cart({ sidebarFunc, openState }) {

    const { state } = useContext(ProductContext)
    const { cart } = state
    const [total, setTotal] = useState(0)
    // console.log(state);

    const st = {
        cart: `w-2/5 h-full fixed top-0 right-0 bg-[rgb(231,231,231)] overflow-y-auto ${openState ? 'translate-x-[0px] ' : ' translate-x-[540px]'}`,
        h1: 'text-[50px] text-[black] m-[10px]',
        xmark: 'text-[30px] mt-[20px] ml-[20px] bg-red-300 p-[5px] rounded-[10px] cursor-pointer '
    }


    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + item.price * item.quantity;
            }, 0);

            setTotal(res)
        };
        getTotal();
    }, [cart]);




    return (
        <div className={st.cart}>
            <FaTimes className={st.xmark} onClick={sidebarFunc} />
            <h1 className={st.h1}>Shopping Cart</h1>

            {state.cart.map(item => (
                <CartItem cartData={item} key={item.id} />
            ))}
            <h1 className='text-[30px] text-black'>Total Price: {total}$</h1>
        </div>
    )
}

export default Cart