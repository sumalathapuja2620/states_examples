import React from 'react';
import './Generate.css'
class GenerateRndmClr extends React.Component{
    constructor(){
        super()
        this.state={
            color:""
        }
    }
    randomClr=()=>{
        let chars="abcdef0123456789"
        let hexa="#"
        for (let i=0;i<6;i++){
            // console.log(i)
            const randomNum=Math.floor(Math.random()*chars.length)
            // console.log(randomNum)
            hexa+=chars[randomNum]
        }
        // console.log(hexa)
        this.setState({color:hexa})

    }
    render(){
        return(
            <div id="color"style={{backgroundColor:this.state.color}}>
                <h2>RANDOM COLOUR GENERATOR</h2>
                <button onClick={this.randomClr} id="random">RANDOM COLORS</button>
            </div>
        )
    }
}
export default GenerateRndmClr