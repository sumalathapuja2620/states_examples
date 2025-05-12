import React from 'react';
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import './Themetoggler.css'
class Themetoggler extends React.Component{
    constructor(){
        super()
        this.state={
            a:false
        }
    }
    Themetoggler=()=>{
        this.setState({a:!this.state.a})
    }
    render(){
        return(
            <div style={{backgroundColor:this.state.a?"black":"white"}} id="theme">
                <button onClick={this.Themetoggler} id="Themes"> {this.state.a? <IoMdSunny/>:<FaMoon/>} </button>
            </div>
        )
    }
}
export default Themetoggler