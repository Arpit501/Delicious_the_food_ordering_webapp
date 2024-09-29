
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";


const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch()

    const handlClearCart=()=>{

        dispatch(clearCart());
    }

    let [totalPrice,setTotalPrice]=useState(0);



   let [price,setPrice]=useState(0);


    return( cartItems.length===0?<h1>Cart is empty Please Add some items!!!</h1>:
        <div>
                
           
        <div className="mx-auto p-2 my-5 bg-[#f0f0f0] w-6/12 rounded-md shadow-md ">

            <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold ">Cart</h1>
            </div>
            </div>
           
             <div className="absolute top-[124px] right-4" >

            <button className="font-semibold m-4 rounded-md py-2 px-4 bg-[#f0f0f0] text-black shadow-md" onClick={handlClearCart}>Clear Cart</button>
            </div>


        <div className="w-6/12 mx-auto bg-[#f0f0f0]">

         <ItemsList items={cartItems} btnShow={false}/>

            </div>
            <div className="mx-auto font-bold text-xl h-12 text-center w-6/12 bg-[#f0f0f0] mb-5 rounded-md shadow-md">
                <span>Total Price: 
                   { 
                   cartItems.map((item)=>{
                     
                     totalPrice=0;
                     totalPrice=(item.card.info.price/100||item.card.info.defaultPrice/100)

                    price+=totalPrice;

}) }{" "}₹{Math.floor(price)}
                    </span>
            </div>
        </div>
            
    )

}

export default Cart;