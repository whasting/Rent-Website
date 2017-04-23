import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <form name="login" action="/login" method="post">
                    <ul className="login-form">
                        <li
                          className="login-input">
                          <label>Email</label>
                            <input
                              type="email"
                              name="usermail"
                              placeholder="yourname@email.com"
                              required/>
                        </li>
                        <li
                          className="login-input">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            placeholder="password"
                            required/></li>
                        <li
                          className="login-button">
                            <input type="submit" value="Login"/></li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default Login
