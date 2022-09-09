import React from 'react'
import { FaBars } from "react-icons/fa"
import { FiChevronRight, FiUser, FiShoppingCart } from "react-icons/fi"

function Navbar() {
    const style = {
        nav: "bg-[#131922] w-full h-1/5 text-white p-[16px] ",
        nav_first: "flex justify-between",
        nav_first_left: "flex bg-blue-400 flex-[.45] items-start justify-between",

        nav_first_right: "text-[20px] flex bg-red-700 flex-[.45] items-center",
        nav_icon_user: "text-[30px] mx-[3px]",
        nav_icon_cart: "text-[30px]",

        nav_icon_bar: "text-[40px]",
        nav_logo: "w-[60%] h-[40px] mt-[7px] mr-[10px]",
    }
    return (
        <div className={style.nav}>

            <div className={style.nav_first}>
                <div className={style.nav_first_left}>
                    <FaBars className={style.nav_icon_bar} />
                    <img src="amazon__logo.svg" alt="" className={style.nav_logo} />
                </div>

                <div className={style.nav_first_right}>
                    <p>Sign in</p>
                    <FiChevronRight />
                    <FiUser className={style.nav_icon_user} />
                    <FiShoppingCart className={style.nav_icon_cart} />

                </div>
            </div>
        </div>
    )
}

export default Navbar