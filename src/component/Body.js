
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body=()=>{


  const {setUserName,loggedInUser}=useContext(UserContext);

    const[filteredRestaurant,setfilteredRestaurant]=useState([])

    const[searchText,setsearchText]=useState("")
    
    const [listOfRestaurants,setListOfRestauarnt]=useState([]);

    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData=async()=>{

    
      const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');


      const json= await data.json();

      
      setListOfRestauarnt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
    }

    const onlineStatus=useOnlineStatus()

    if(onlineStatus===false)
    {
      return <h1>Looks like you are offline!! Please check your internet connection</h1>
    }
      

    return listOfRestaurants.length===0 ?<Shimmer/>:(
        <div className="body">

            <div className="filter flex">
              <div className="search m-4 p-4">
                <input type="text" data-testid="searchInput" placeholder="Search restaurants here" className="border border-solid border-black rounded-md p-2" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>
                <button className="px-4 py-0.5 bg-green-400 mx-2 rounded-md" onClick={()=>{
   
                 let filteredRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));  

                  setfilteredRestaurant(filteredRestaurant);
                  
                }}>Search</button>
              </div>

                <div className="flex items-center" >
                <button 
                className="px-2 py-0.5 bg-gray-200 rounded-md"
                onClick={()=>{
                      
                  
                      let filteredList=listOfRestaurants.filter(
                          (res)=>res.info.avgRating>4
                      )
                     
                      filteredRestaurant.length===listOfRestaurants.length? setfilteredRestaurant(filteredList): setfilteredRestaurant(listOfRestaurants);
                     
              }}>
                Top Rated Restaurants
                </button>
                </div>
               
            </div>
            <div className="res-container flex flex-wrap">
                      {      
                        filteredRestaurant.map((restaurant,index)=>

                          
                         <Link className="text-link box-border w-[300px] block" to={"/restaurants/"+ restaurant.info.id}> 

                      {

                        <RestaurantCard  resData={restaurant}/>
                        
                      }
                         

                         </Link>
                         )
                      }
            </div>
        </div>
    )
}

export default Body;