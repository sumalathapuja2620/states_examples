// import React from 'react';
// import './Nav.css'
// class Auth extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             isLogged:true
//         }
//     }
//     handleSignup=()=>{
//         this.setState({isSignup:!this.state.isSignup})
//     }
//     handleLogin=()=>{
//         this.setState({isLogged:!this.state.isLogged})
//     }
//     render(){
//         return(
//             <div id="nav">
//                 <h2>AUTHENTICATION</h2>
//                 <div>
//                 <button onClick={this.handleSignup}>SIGN UP</button>
//                 <button onClick={this.handleLogin}>LOGIN</button>
//             </div>
//             {this.}
//             </div>
//         )
//     }
// }
// export default Auth


import React from 'react';
import './Nav.css'; 


class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: true 
    };
  }


  toggleForm = () => {
    this.setState(prevState => ({ isLogin: !prevState.isLogin }));
  }


  render() {
    return (
      <div className="container">
        <div className="form">
          <h2 className="heading">
            {this.state.isLogin ? 'Login' : 'Sign Up'}
          </h2>


         
          {this.state.isLogin ? (
            <div>
              <input type="text" placeholder="Username" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="button">
                Login
              </button>
            </div>
          ) : (
            
            <div>
              <input type="text" placeholder="Username" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="button">
                Sign Up
              </button>
            </div>
          )}


          
          <button
            className="toggle-button"
            onClick={this.toggleForm}
          >
            {this.state.isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
        </div>
      </div>
    );
  }
}


export default Auth;
