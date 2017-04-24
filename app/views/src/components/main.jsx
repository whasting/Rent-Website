import React, { Component } from 'react';
import Dashboard from './dashboard.jsx';
import Nav from './nav.jsx';

class Main extends Component {
    render() {
        return(
            <div className="main">
                <Nav/>
                <Dashboard/>
            </div>
        );
    }
}

export default Main;
