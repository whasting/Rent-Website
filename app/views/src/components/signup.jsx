import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="col-md-10 col-md-offset-1 main">
                <form name="signup" action="/signup" method="post">
                    <ul>
                        <li><label>Email</label>
                            <input type="email" name="usermail" placeholder="yourname@email.com" required/></li>
                        <li><label>Password</label>
                            <input type="password" name="password" placeholder="password" required/></li>
                        <li>
                            <input type="submit" value="Signup"/></li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default Signup