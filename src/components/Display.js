import React from 'react';
import '../assets/css/Display.css'
import NavBar from './NavBar';
import Settings from './Settings';
import Games from './Games';
import Music from './Music';
import CoverFlow from './CoverFlow';
import Devotional from './Devotional';
import AllSongs from './AllSongs';
import Artists from './Artists';
import Album from './Album';

const Display = (props) => {
    return(
        // Display all pages
        <div className="display">
            {props.activePage==="Home"?<NavBar activeItem={props.activeItem}/> : null}
            {props.activePage==='CoverFlow'?<CoverFlow activeItem={props.activeItem}/> : null}
            {props.activePage==='Music'?<Music activeItem={props.activeItem}/> : null}
            {props.activePage==='Games'?<Games /> : null}
            {props.activePage==='Settings'?<Settings /> : null}
            {props.activePage==='Devotional'?<Devotional /> : null}
            {props.activePage==='Album'?<Album /> : null}
            {props.activePage==='Artists'?<Artists /> : null}
            {props.activePage==='AllSongs'?<AllSongs /> : null}
        </div>
    )
}

export default Display;