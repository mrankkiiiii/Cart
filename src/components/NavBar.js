import React from 'react';
import '../assets/css/index.css'
import { ListGroup } from 'react-bootstrap'
const NavBar = (props) => {
    return(
        <div className="nav">
        <ListGroup className="nav-menu">
            <ListGroup.Item className={props.activeItem==="CoverFlow"? 'active': ''}>
                Cover Flow
            </ListGroup.Item>
            <ListGroup.Item className={props.activeItem==="Music"? 'active': ''}>
                Music
            </ListGroup.Item>
            <ListGroup.Item className={props.activeItem==="Games"? 'active': ''}>
                Games
            </ListGroup.Item>
            <ListGroup.Item className={props.activeItem==="Settings"? 'active': ''}>
                Settings
            </ListGroup.Item>
        </ListGroup>
            {/* <ul className="nav-menu">
                <h3>i-Pod</h3>
                    <li id="cover" className={props.activeItem==="CoverFlow"? 'active': ''}>
                        Cover Flow
                     </li>
                    <li id="music" className={props.activeItem==='Music'? 'active': ''}>
                        Music
                    </li>
                    <li id="games" className={props.activeItem==='Games'? 'active': ''}>
                        Games
                    </li>
                    <li id="setting" className={props.activeItem==='Settings'? 'active': ''}>
                        Settings
                    </li>
            </ul> */}
        </div>
    );
}
export default NavBar