import React, { useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { TiMinus } from 'react-icons/ti'
function CartItem({ cartData }) {

    const [number, setNumber] = useState(1)
    const plus = () => {
        setNumber(number + 1)
    }
    const minus = () => {
        setNumber(number - 1)
    }
    const { state } = useContext(ProductContext)
    console.log("cart >>", state.products);

    return (
        <div className="flex bg-red-200 h-[150px] border-b-solid border-b-[2px] border-b-[black] bg-[rgb(231,231,231)]">
            <div className='w-[100%] h-[100px] flex mt-[25px]'>
                <img className='h-[100px] w-[100px] rounded-[6px] ml-[15px] mr-[15px]' src={cartData.data.productImage} alt="" />
                <h1 className='text-[20px] text-black'>{cartData.data.productName}</h1> &nbsp; &nbsp; &nbsp; &nbsp;
                <h3 className='text-black'>$ {cartData.data.productPrice * Math.min(Math.max(parseInt(number), 1), 10)}</h3>
                <div className='h-[100px] bg-red-300 w-[200px] ml-[20px]'>
                    <div className='h-[50%] w-[100%] bg-yellow-400 flex'>
                        <button onClick={minus} className='h-[100%] w-[33%] bg-green-100 flex items-center justify-center'><AiOutlineMinus className='text-[30px] cursor-pointer text-[#172b4d]' /></button>
                        <div className='h-[100%] w-[34%] bg-green-400 flex items-center justify-center text-[20px] text-[black] rounded-[8px]'>{Math.min(Math.max(parseInt(number), 1), 10)}</div>
                        <button onClick={plus} className='h-[100%] w-[33%] bg-green-100 flex items-center justify-center'><AiOutlinePlus className='text-[30px] cursor-pointer text-[#172b4d]' /></button>
                    </div>
                    <div className='h-[50%] w-[70%] ml-[15%] flex items-center bg-yellow-300 justify-center '>
                        <RiDeleteBin6Line className='text-[30px] text-[red] cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem