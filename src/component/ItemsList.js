

import { useDispatch } from "react-redux";

import { CDN_URL } from "../utils/constants";

import { addItem, removeItem } from "../utils/cartSlice";

const ItemsList=({items,btnShow})=>{


    const dispatch=useDispatch()

    const handleAddorRemoveItem=(item,value)=>{
       
            value?dispatch(addItem(item)):dispatch(removeItem(item));

    }

    return(

        <div >
             <ul>
                {items.map(item =>

                <div data-testid="foodItems" key={item.card.info.id} className="border-b-2 border-gray-200  m-2 p-2 text-left flex justify-between">
                    
                    <div className="w-9/12">
                    <div className="py-2 font-semibold">
                        <span>{item.card.info.name}{" "}</span>
                        <span>for ₹{ item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    </div>
                        <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div>
                <img src={CDN_URL+item.card.info.imageId} className="w-24 h-24 rounded-sm shadow-md" alt="" />

                { btnShow?<div className="relative bottom-3 left-4" >
                <button className="bg-white rounded-md p-2 shadow-md w-16 text-green-600 font-medium border" 

                onClick={()=>handleAddorRemoveItem(item,true)}>
                        Add
                    </button>
                </div>:<div className="relative bottom-1 left-2" >
                <button className="bg-white rounded-md p-2 shadow-md w-20 text-green-600 font-medium border" 

                onClick={()=>handleAddorRemoveItem(item,false)}>
                        Remove
                    </button>
                </div>
            }

                </div>
                 </div>

            )}

            </ul>
        </div>
        
    )
}

export default ItemsList;