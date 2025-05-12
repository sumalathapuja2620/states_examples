import React from 'react';
class Login extends React.Component{
    render(){
        return(
            <div>
                <form action="">
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='pswd' />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
export default Login