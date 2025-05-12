import React from 'react';
import './Random.css'
class Randomclr extends React.Component{
    constructor(){
        super()
        this.state={
            color:"white"
        }
    }
    randomClr=(clr)=>{
        this.setState({color:this.state.count=clr})
    }
    render(){
        return(
            <div id="color" style={{backgroundColor:this.state.color}}>
                <h2>BACKGROUND COLOR WITH DIFFERENT BUTTON</h2>
                <button onClick={()=>this.randomClr("orange")} id="btns">ORANGE</button>
                <button onClick={()=>this.randomClr("black")} id="btns">BLACK</button>
                <button onClick={()=>this.randomClr("green")} id="btns">GREEN</button>
            </div>
        )
    }
}
export default Randomclr