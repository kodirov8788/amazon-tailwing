import React, { useContext, useState } from 'react'
import { FaBars } from "react-icons/fa"
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import { FiChevronRight, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import Cart from './Cart';
const Navbar = ({ profileName, profileImg }) => {
    const { state } = useContext(ProductContext)
    const style = {
        nav: "bg-[#131921] w-full h-1/5 text-white p-[16px]",
        nav_first: "flex justify-between",
        nav_first_left: "flex  flex-[.45] items-start justify-between",
        nav_first_right: "text-[20px] flex flex-[.45] items-center justify-end",
        nav_icon_user: "text-[30px] mx-[3px]",
        nav_icon_cart: "text-[30px] pointer",
        nav_icon_bar: "text-[40px]",
        nav_logo: "w-[60%] h-[40px] mt-[7px] mr-[10px] select-none ",
        nav_search: "w-full h-[50px] bg-[#fff] rounded-[6px] mt-[15px] flex items-center ",
        nav_search_input: "w-full h-[48px] indent-[10px] text-black ml-[5px] outline-none text-[19px] ",
        nav_seacrh_icons: "w-[50px] h-[50px] rounded-[6px] bg-[#FEBD69] flex items-center justify-center ",
        nav_li: "text-[20px] font-sans text-[#fff] mx-[10px] flex",
        nav_a: "w-max"

    }


    const [openSide, setOpenSide] = useState(false)
    const AddCartSidebar = () => {
        if (openSide === false) {
            setOpenSide(true)
        }
        else {
            setOpenSide(false)

        }
    }
    return (
        <div className={style.nav}>
            <button className="border bg-red-400 hover:bg-blue-400 p-2 rounded duration-500"
                onClick={() => signOut(auth)}>Sign Out</button>
            <div className={style.nav_first}>
                <div className={style.nav_first_left}>
                    <FaBars className={style.nav_icon_bar} />
                    <img src="amazon__logo.svg" alt="" className={style.nav_logo} />
                </div>


                <div className={style.nav_first_right}>
                    <h1>{profileName}</h1>
                    <img src={profileImg} className="w-[50px] rounded-full" alt="" />
                    <span className='mb-[3px]'><Link to="/login">Sign in</Link></span>
                    <FiChevronRight />
                    <FiUser className={style.nav_icon_user} />
                    <FiShoppingCart onClick={AddCartSidebar} className={style.nav_icon_cart} />
                    <span className="text-[#F08804]">{state.products ? state.products?.length : 0}</span>
                </div>
            </div>
            <div className={style.nav_search}>
                <input className={style.nav_search_input} type="text" placeholder="Search Amazon" />
                <button className={style.nav_seacrh_icons}><FiSearch className=' text-[27px] text-[#333333]' /></button>
            </div>
            <Cart sidebarFunc={AddCartSidebar} openState={openSide} />
        </div>
    )
}

export default Navbar