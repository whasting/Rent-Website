import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Main from './components/main.jsx';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Main}/>
        </div>
    </Router>
);

export default App;
