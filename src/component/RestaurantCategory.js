
import ItemsList from "./ItemsList.js";

const RestaurantCategory=({data,showItems,setShowIndex})=>{


   const HandleClick=()=>{

        setShowIndex();
        
    }

    fontStretch={
        "font-stretch": "ultra-expanded"
    }

    return(
        <div>

                <div className="w-6/12 p-4 shadow-lg bg-[#f0f0f0] mx-auto my-4 rounded-lg">

                <div className="flex justify-between cursor-pointer" onClick={HandleClick}>

                    <span className=" font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span style={fontStretch} className="font-bold text-2xl text">{"^"}</span>
                    </div>

            { showItems && <ItemsList btnShow={true} items={data.itemCards}/>  }

                </div>
        </div>
    )
}

export default RestaurantCategory;