import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Main from './components/main.js';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';

const App = () => (
    <Router>
        <div>
            <nav className="navbar">
                <li><Link to="/">Home</Link></li>
            </nav>
            <Route exact path="/" component={Main}/>
        </div>
    </Router>
);

export default App;
