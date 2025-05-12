import React from 'react';
import './Counter.css'
class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handPlus=()=>{
        this.setState({count:this.state.count+1})
    }
    handMinus=()=>{
        this.setState({count:this.state.count-1})
    }
  render(){
    return(
      <div id="count">
        <div id="c1">
        <h2>COUNTER APP</h2>
        <h3>COUNT</h3>
        <h1>{this.state.count}</h1>
        </div>
        <div id="btn">
        <button onClick={this.handPlus} id="b1">INCREEMENT</button>
        <button onClick={this.handMinus} id="b2" disabled={this.state.count==0}>DECREEMENT</button>
        </div>
        <div><button onClick={()=>this.setState({count:0})} id="reset">RESET</button></div>
      </div>
    )
  }
}
export default Counter