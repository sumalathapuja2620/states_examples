import React from 'react';
import Randomclr from './States/Random/Randomclr.jsx';
import GenerateRndmClr from './States/Generateclrs/GenerateRndmClr.jsx';
import Counter from './States/Counter/Counter.jsx';
import Randomquote from './States/Randomquoteclrs/Randomquote.jsx';
import Themetoggler from './States/Themetoggler/Themetoggler.jsx';
class App extends React.Component{
  render(){
    return(
      <div>
        <Counter/>
        <Randomclr/>
        <GenerateRndmClr/>
        <Randomquote/>
        <Themetoggler/>
      </div>
    )
  }
}
export default App