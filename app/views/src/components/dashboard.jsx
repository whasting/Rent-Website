import React, { Component } from 'react';
import Breakdown from './breakdown.jsx';
import Community from './community.jsx';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">

                <div className="dash-left">
                    <Community/>
                </div>
                <div className="dash-right">
                    <Breakdown/>
                </div>
            </div>
        );
    }
}

export default Dashboard;
