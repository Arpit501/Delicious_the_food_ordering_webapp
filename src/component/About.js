
import {Component} from "react";
import UserContext from "../utils/UserContext";

   
    class About extends Component{
        
        constructor(props)
        {
            super(props)
            
        }

    componentDidMount(){

    }

    render(){

    return(
        <div className="">
            <UserContext.Consumer>{({loggedInUser})=>(
                 <h1>About us Page is under development</h1>

            )}</UserContext.Consumer>
            <div>

            </div>
        </div>
    )
}

}

export default About;

