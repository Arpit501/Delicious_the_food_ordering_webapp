

import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCart } from 'lucide-react';



const Header=()=>{
    

    const cartItems = useSelector((store)=>store.cart.items)

    const onlineStatus=useOnlineStatus();

    return (

        <div className="flex justify-between shadow-md px-1">

            <div className="w-44">
               
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">

                   
                    <li className="px-2 text-lg">
                        online status:{onlineStatus?"✅":"🔴"}
                    </li>


                    <li className="px-2 text-lg"><Link to="/">Home</Link></li>

                    <li className="px-2 text-lg"><Link to="/about">About Us</Link></li>
                    
                    <li className="px-2 text-lg"><Link to="/contact">Contact Us</Link></li>
 
                    <li className="px-2 text-lg"><Link to="/grocery">Grocery</Link></li>

                    <Link to='/cart'> <ShoppingCart className="h-7 w-7 mr-3" /></Link>
                    {cartItems.length!==0?<Link to='/cart'> <li className="rounded-lg shadow-md px-2 py-[2px] bg-sky-300 font-bold text-sm relative right-7 bottom-2 text-white">{cartItems.length}</li></Link>:""}
                
                </ul>
            </div>
        </div>
    )
}

 
export default Header;