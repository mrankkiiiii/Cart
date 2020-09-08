import React from 'react';
import './index.css'
const NavBar = (props) => {
    return(
        <div className="nav">
            <ul className="nav-menu">
                <h3>i-Pod</h3>
                    <li> Cover Flow</li>
                    <li> Music</li>
                    <li> Games</li>
                    <li> Settings</li>
            </ul>
        </div>
    );
}
export default NavBar;