import React, { useContext } from 'react'
import { BsCartPlus } from "react-icons/bs"
import { TiTick } from 'react-icons/ti'
import { ProductContext } from '../context/ProductContext'
import { addToCart } from "../context/ProductContext"

function Product({ product }) {
    const { state, dispatch } = useContext(ProductContext)
    const { cart } = state
    console.log(cart)
    // console.log("state >>", state)
    const style = {
        card: "w-[250px] h-[400px] bg-blue-300 m-3 rounded-[10px] overflow-hidden group ",
        wrap: "flex h-full",
        textWrap: "w-3/4 bg-red-300 h-full flex  flex-col text-[16px] pt-[10px] pl-2 ",
        h1: "text-[22px] font-bold",
        h2: "text-[18px]",
        img: "w-full h-4/5 object-cover ",
        icon: "text-[30px] mx-auto mt-[20px] group-hover:scale-[1.1] duration-150 cursor-pointer",
        icon2: "text-[30px] mx-auto mt-[20px] group-hover:scale-[1.1] duration-150 cursor-pointer"
    }
    // const AddProduct = (item) => {
    //     // console.log("product  >>>>", item)
    //     dispatch({ type: "ADD__CART", payload: item })
    // }
    return (
        <div className={style.card}>
            <img src={product.data.productImage} alt="" className={style.img} />
            <div className={style.wrap}>
                <div className={style.textWrap}>
                    <h1 className={style.h1}>{product.data.productName.split("").splice(0, 14).join("")}</h1>
                    <h2 className={style.h2}> ${product.data.productPrice}</h2>
                </div>

                {
                    state.cart?.some(it => it.id === product.id) ?
                        <TiTick className={style.icon2} /> : <BsCartPlus
                            className={style.icon} onClick={() => dispatch(addToCart(product, cart))} />
                }


            </div>
        </div>
    )
}

export default Product