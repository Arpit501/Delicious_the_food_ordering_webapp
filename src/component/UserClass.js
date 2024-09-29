

import React from "react";

class UserClass extends React.Component{

    constructor(props){

        super(props);

        this.state={
            count:0,
            count1:1,

            userInfo:{
                name:"ash",
                location:"guildfort",
                avatar_url:"dummy photo"
            }

        }

    }



   async componentDidMount(){
        
        const data=await fetch("https://api.github.com/users/arpit501");

        const json=await data.json();

 
        this.setState({
            userInfo:json
        })


    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }
    
    render(){

        const{count,count1}=this.state;

        const{name,location,login,avatar_url}=this.state.userInfo;

        return (
            <div className="user-card">

                <h1>count: {count}</h1>

                <button onClick={()=>{

                    this.setState({
                        count:this.state.count+1,

                        count1:this.state.count1+1,
                    }
                )
                }}>Count Increase</button>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h3>:avatar:{avatar_url}</h3>
                     

            </div>)
    }

}


export default UserClass;

