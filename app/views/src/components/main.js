import React, { Component } from 'react';
import Login from './login.jsx';
import Signup from './signup.jsx';

class Main extends Component {
    render() {
        return(
            <div className="splash-container">
              <div className="splash">
                <h1 className="rent-logo">Rent</h1>
                <Login />
              </div>
            </div>
        );
    }
}

export default Main;
