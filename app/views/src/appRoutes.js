import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Main from './components/main.js';
import Login from './components/login.jsx';

const App = () => (
    <Router>
        <div>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </nav>
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
        </div>
    </Router>
);

export default App;
