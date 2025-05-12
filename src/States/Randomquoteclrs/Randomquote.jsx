import React from 'react';
import './Randomquote.css'
class Randomquote extends React.Component{
    constructor(){
        super()
        this.state={
            quote:"",
            color:""
        }
    }
    Randomquote=()=>{
        let quotes= [
  "Believe you can and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes later becomes never. Do it now.",
  "Great things take time. Be patient.",
  "If you fail, never give up because F.A.I.L. means ‘First Attempt In Learning.’",
  "Doubt kills more dreams than failure ever will.",
  "You are stronger than you think.",
  "Act as if what you do makes a difference. It does.",
  "Your only limit is your mind.",
  "Stay focused and never give up.",
  "Discipline is doing what needs to be done, even when you don’t feel like doing it.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Be so good they can’t ignore you.",
  "The secret of getting ahead is getting started.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Work hard in silence. Let your success be your noise.",
  "A river cuts through rock, not because of its power, but because of its persistence.",
  "Winners are not people who never fail, but people who never quit."
];

     const randomQUote=Math.floor(Math.random()*quotes.length)
        // console.log(randomQUote)
        const q=quotes[randomQUote]
        console.log(q)
        let chars="abcdef0123456789"
        let hexa="#"
        for (let i=0;i<6;i++){
            // console.log(i)
            const randomNum=Math.floor(Math.random()*chars.length)
            // console.log(randomNum)
            hexa+=chars[randomNum]
        }

        this.setState({quote:this.state.quote=q,color:hexa})
    }
    render(){
        return(
            <div id="quote" style={{backgroundColor:this.state.color}}>
                <h2>{this.state.quote}</h2>
                <button onClick={this.Randomquote} id="randoms">RANDOM QUOTE</button>
            </div>
        )
    }
}
export default Randomquote;