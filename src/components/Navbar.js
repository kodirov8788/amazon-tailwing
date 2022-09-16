import React from 'react'
import { FaBars } from "react-icons/fa"
import { FiChevronRight, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const style = {
        nav: "bg-[#131921] w-full h-1/5 text-white p-[16px]",
        nav_first: "flex justify-between",
        nav_first_left: "flex  flex-[.45] items-start justify-between",
        nav_first_right: "text-[20px] flex flex-[.45] items-center justify-end",
        nav_icon_user: "text-[30px] mx-[3px]",
        nav_icon_cart: "text-[30px]",
        nav_icon_bar: "text-[40px]",
        nav_logo: "w-[60%] h-[40px] mt-[7px] mr-[10px] select-none ",
        nav_search: "w-full h-[50px] bg-[#fff] rounded-[6px] mt-[15px] flex items-center ",
        nav_search_input: "w-full h-[48px] indent-[10px] text-black ml-[5px] outline-none text-[19px] ",
        nav_seacrh_icons: "w-[50px] h-[50px] rounded-[6px] bg-[#FEBD69] flex items-center justify-center ",
        nav_li: "text-[20px] font-sans text-[#fff] mx-[10px] flex",
        nav_a: "w-max"

    }
    return (
        <div className={style.nav}>
            <div className={style.nav_first}>
                <div className={style.nav_first_left}>
                    <FaBars className={style.nav_icon_bar} />
                    <img src="amazon__logo.svg" alt="" className={style.nav_logo} />
                </div>


                <div className={style.nav_first_right}>
                    <span className='mb-[3px]'><Link to="/login">Sign in</Link></span>
                    <FiChevronRight />
                    <FiUser className={style.nav_icon_user} />
                    <FiShoppingCart className={style.nav_icon_cart} />
                    <span className="text-[#F08804]">0</span>
                </div>
            </div>
            <div className={style.nav_search}>
                <input className={style.nav_search_input} type="text" placeholder="Search Amazon" />
                <button className={style.nav_seacrh_icons}><FiSearch className=' text-[27px] text-[#333333]' /></button>
            </div>
            <div className='h-[25%]  mt-[10px] list-none flex items-center overflow-x-auto snap-none scroller'>
                <li className={style.nav_li}><a href="#">Deals</a></li>
                <li className={style.nav_li}><a href="#" className={style.nav_a}>Amazon Basics</a></li>
                <li className={style.nav_li}><a href="#" className={style.nav_a}>Best Sellers</a></li>
                <li className={style.nav_li}><a href="#">Livestreams</a></li>
                <li className={style.nav_li}><a href="#">Video</a></li>
                <li className={style.nav_li}><a href="#" className={style.nav_a}>New Releases</a></li>
                <li className={style.nav_li}><a href="#">Home</a></li>
                <li className={style.nav_li}><a href="#">Books</a></li>
                <li className={style.nav_li}><a href="#" className={style.nav_a}>Health & Household</a></li>
                <li className={style.nav_li}><a href="#">Pc</a></li>
                <li className={style.nav_li}><a href="#" className={style.nav_a}>Gift Cards</a></li>
                <li className={style.nav_li}><a href="#">Music</a></li>
                <li className={style.nav_li}><a href="#">Lists</a></li>
            </div>
        </div>
    )
}

export default Navbar