


import { createSlice,current } from "@reduxjs/toolkit";


const cartSlice=createSlice({
 
    name:'cart',

    initialState:{
        items:[]
        
    },
 
    reducers:{

        addItem:(state,action)=>{

            state.items.push(action.payload)
        },

        removeItem:(state,action)=>{

            let index;
            for(let key in state.items)
            {
                if(state.items[key].card.info.id===action.payload.card.info.id)
                    {
                        index=key;
                    }
            }

            state.items.splice(index,1);
            
        },
 
        clearCart:(state,action)=>{
            state.items.length=0;
        }
    }
})



export const {addItem,removeItem,clearCart}=cartSlice.actions;


export default cartSlice.reducer;
