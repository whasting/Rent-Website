import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (<div className="nav-container">
                <nav className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <button
                            onClick={() => {
                                $.ajax({url: '/logout', method: 'GET'}).then((res) => {
                                    window.location.replace('/login');
                                });
                            }}
                            type="submit"
                            className="logout-button">Logout
                        </button>
                    </li>
                </nav>
            </div>
        );
    }
}

export default Nav;