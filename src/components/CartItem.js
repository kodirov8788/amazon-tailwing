import React, { useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { increase, decrease, deleteItem } from "../context/ProductContext"
const CartItem = ({ cartData, onAdd, onRemove }) => {
    const { state, dispatch } = useContext(ProductContext)
    const { cart } = state

    const style = {
        cartDiv: "flex bg-red-200 h-[150px] border-b-solid border-b-[2px] border-b-[black] bg-[rgb(231,231,231)]",
        cartWrapper: 'w-[100%] h-[100px] flex mt-[25px]',
        cartImage: 'h-[100px] w-[100px] rounded-[6px] ml-[15px] mr-[15px]',
        cartName: 'text-[20px] text-black',
        cartPrice: 'text-black',
        cartFunc: 'h-[100px] bg-red-300 w-[200px] ml-[20px]',
        cartTop: 'h-[50%] w-[100%] bg-yellow-400 flex',
        minusBtn: 'h-[100%] w-[33%] bg-green-100 flex items-center justify-center',
        minusIcon: 'text-[30px] cursor-pointer text-[#172b4d]',
        numDiv: 'h-[100%] w-[34%] bg-green-400 flex items-center justify-center text-[20px] text-[black] rounded-[8px]',
        plusBtn: 'h-[100%] w-[33%] bg-green-100 flex items-center justify-center',
        plusIcon: 'text-[30px] cursor-pointer text-[#172b4d]',
        cartBottom: 'h-[50%] w-[70%] ml-[15%] flex items-center bg-yellow-300 justify-center ',
        trashBtn: 'text-[30px] text-[red] cursor-pointer'



    }
    return (
        <div>
            <div className={style.cartDiv} >
                <div className={style.cartWrapper}>
                    <img className={style.cartImage} src={cartData.data.productImage} alt="" />
                    <h1 className={style.cartName}>{cartData.data.productName}</h1> &nbsp; &nbsp; &nbsp; &nbsp;
                    {/* <h3 className={style.cartPrice}>$ {cartData.data.productPrice * Math.min(Math.max(parseInt(cartData.quantity), 1), 10)}</h3> */}
                    <h3 className={style.cartPrice}>$ {cartData.data.productPrice * cartData.quantity}</h3>
                    <div className={style.cartFunc}>
                        <div className={style.cartTop}>
                            <button disabled={cart.map(item => item.id === cartData.id) && cartData.quantity <= 1} onClick={() => dispatch(decrease(cart, cartData.id))} className={style.minusBtn}><AiOutlineMinus className={style.minusIcon} /></button>
                            <div className={style.numDiv}>{Math.min(Math.max(parseInt(cartData.quantity), 1), 10)}</div>
                            <button disabled={cart.map(item => item.id === cartData.id) && cartData.quantity > 9} onClick={() => dispatch(increase(cart, cartData.id))} className={style.plusBtn}><AiOutlinePlus className={style.plusIcon} /></button>
                        </div>
                        <div className={style.cartBottom}>
                            <RiDeleteBin6Line className={style.trashBtn} onClick={() => dispatch(deleteItem(cart, cartData.id, "ADD_CART"))} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartItem