import React, { useContext, useState, useCallback } from 'react'
import { FaBars } from "react-icons/fa"
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import { FiChevronRight, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import Location from "../images/location.png"
import Login from "../images/login.png"
import Cart from './Cart';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';
const Navbar = ({ profileName, profileImg }) => {
    const { state } = useContext(ProductContext)
    const { currentUser } = useContext(AuthContext)
    const { email } = currentUser
    const { cart } = state
    const style = {
        nav: "bg-[#131921] w-full h-[80px] text-white p-[16px] items-center flex",
        nav_first: "flex justify-between",
        nav_first_left: "flex  flex-[.45] items-start justify-between",
        nav_first_right: "text-[20px] flex flex-[.45] items-center justify-end",
        nav_icon_user: "text-[30px] mx-[3px]",
        nav_icon_cart: "text-[30px] pointer",
        nav_icon_bar: "text-[40px] lg:hidden",
        nav_logo: "w-[60%] h-[40px] mt-[20px] ml-[5px]  select-none lg:w-[120px] ",
        nav_search: "w-[700px] h-[50px] bg-[#fff] rounded-[6px] mt-[15px]   flex items-center ",
        nav_search_input: "w-full h-[48px] indent-[10px] text-black ml-[5px] outline-none text-[19px] ",
        nav_seacrh_icons: "w-[50px] h-[50px] rounded-[6px] bg-[#FEBD69] flex items-center justify-center ",
        nav_li: "text-[20px] font-sans text-[#fff] mx-[10px] flex",
        nav_a: "w-max",
        location: "w-[150px] mt-[3px] h-[70px] hover:border-[#fff] hover:border-[1px] flex",

    }


    const [openSide, setOpenSide] = useState(false)
    useEffect(() => {
        cart.length === 0 && setOpenSide(false)
    }, [cart])



    const AddCartSidebar = () => {
        if (cart.length === 0) return alert("siz hali harid qilmadingiz ")
        if (openSide === false) {
            setOpenSide(true)
        }
        else {
            setOpenSide(false)
        }
    }
    return (
        <div className={style.nav}>
            <button className="border bg-red-400 hover:bg-blue-400 p-2 lg:hidden  rounded duration-500"
                onClick={() => signOut(auth)}>Sign Out</button>
            <div className={style.nav_first}>
                <div className={style.nav_first_left}>
                    <FaBars className={style.nav_icon_bar} />
                    <div className=" w-[135px] h-[70px]  mt-[5px] hover:border-[#fff] hover:border-[1px]">
                        <img src="amazon__logo.svg" alt="" className={style.nav_logo} />

                    </div>
                </div>
                <div className={style.location}>
                    <div className="w-[40px] flex justify-center relative">
                        <img className="w-[35px] h-[30px] mt-[30px]" src={Location} alt="" />
                    </div>
                    <div className="w-[140px] ml-[50px] absolute ">
                        <p className='text-[14px] mt-[15px] text-[gray]'>Deliver to</p>
                        <h1 className='text-[18px]'>Uzbekistan</h1>
                    </div>
                </div>
                <div className={style.nav_search}>
                    <input className={style.nav_search_input} type="text" placeholder="Search Amazon" />
                    <button className={style.nav_seacrh_icons}><FiSearch className=' text-[27px] text-[#333333]' /></button>
                </div>
                <div className={style.nav_first_right}>
                    <h1>{profileName}</h1>
                    <img src={profileImg} className="w-[50px] rounded-full" alt="" />
                    {!email && <div className="w-[125px] flex  items-center h-[70px] hover:border-[#fff] hover:border-[1px]">
                        <span className='mb-[3px] w-[150px] flex ml-[15px]'><Link to="/login">Sign in</Link><img className='w-[30px] h-[30px] ml-[10px] rounded-[50%]' src={Login} alt="" /></span>
                        <FiUser className={style.nav_icon_user} />

                    </div>}
                    <div className="flex justify-center items-center w-[150px] h-[70px] hover:border-[#fff] hover:border-[1px]">
                        <FiShoppingCart onClick={AddCartSidebar} className={style.nav_icon_cart} />
                        <span className="text-[#F08804]">{state.cart ? state.cart?.length : 0}</span>
                    </div>

                </div>

            </div>

            <Cart sidebarFunc={AddCartSidebar} openState={openSide} />
        </div>
    )
}

export default Navbar