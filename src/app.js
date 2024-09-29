
import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Cart.js";


const Grocery=lazy(()=>

    import("./component/Grocery.js")
);

const About=lazy(()=>import("./component/About.js"));
    
      
const AppLayout=()=>{

    const[UserName,setUserName]=useState()

    useEffect(()=>{

        const data={

            name:"akshay saini"
        }
        setUserName(data.name);
    },[])

    return (

        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:UserName,setUserName}}>
        <div className="app">
            <Header/>
     
            <Outlet/>

        </div>
         </UserContext.Provider> 
         </Provider>
    )
}


const appRouter=createBrowserRouter([

    {
        path:"/",

        element:<AppLayout/>,
        
        children:[

            {
                path:'/',

                element:<Body/>,

                errorElement:<Error/>
            },
           
            {
                path:"/contact",

                element:<Contact/>,

            },

            {
               
                path:'/grocery',

                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>

            },
            
            {
                path:'/about',

                element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>

            },
            
            {
               
                path:'/restaurants/:resId',

               
                element:<RestaurantMenu/>

            },

            {
               
                path:'/cart',

               
                element:<Cart/>

            }

        ],

          
        errorElement:<Error/>



    }

]);


 const root=ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter}/>);

 




  