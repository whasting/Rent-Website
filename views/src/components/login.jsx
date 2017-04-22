import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="col-md-10 col-md-offset-1 main">
                <form name="login" action="index_submit" method="get">
                    <ul>
                        <li><label>Email</label>
                            <input type="email" name="usermail" placeholder="yourname@email.com" required/></li>
                        <li><label>Password</label>
                            <input type="password" name="password" placeholder="password" required/></li>
                        <li>
                            <input type="submit" value="Login"/></li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default Login
