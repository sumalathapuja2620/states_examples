import React from 'react';
class Signup extends React.Component{
    render(){
        return(
            <div>
                <form action="">
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='pswd' />
                    <input type="password" placeholder='confirm password' />
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}
export default Signup