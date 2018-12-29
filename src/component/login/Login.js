import React from 'react';


class Login extends React.Component{

    render(){
        return (
            <div>
                <form action="POST" className="loginForm" >
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" />
                    <label htmlFor="email">Password: </label>
                    <input type="password" id="password"/>
                    button
                </form>
            </div>
        )
    }
}

export default Login;