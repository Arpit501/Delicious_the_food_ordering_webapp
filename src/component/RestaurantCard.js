

import { CDN_URL } from "../utils/constants";

import { useContext } from "react";
import UserContext from "../utils/UserContext";
    
const RestaurantCard=(props)=>{

    const {loggedInUser}=useContext(UserContext)

    const {resData}=props;


    const {name,cuisines,sla,avgRating,costForTwo,cloudinaryImageId}=resData.info;

    return(

        <div data-testid="resCard" className="res-card m-8 p-2 h-[470px] rounded-lg shadow-xl bg-[#f0f0f0] hover:bg-gray-200 box-border">
            
            <img className="res-logo w-[240px] h-[200px] rounded-lg" src={CDN_URL+ cloudinaryImageId} alt="res-logo" />

            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4 className="py-1">{cuisines.join(", ")}</h4>
            <h4 className="py-1">{avgRating}</h4>
            <h4 className="py-1">{costForTwo}</h4>
            <h4 className="py-1">{sla.deliveryTime} minutes</h4>
 
        </div>
    )
}



export const withPromotedLabel=(RestaurantCard)=>{
 
    return (props)=>{
        return(
            <div>
                <label className="bg-black text-white absolute rounded-sm px-2 ">Promoted</label>

                <RestaurantCard {...props}/>
            </div>
        )
    }

}


export default RestaurantCard;