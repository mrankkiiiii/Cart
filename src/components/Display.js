import React from 'react';
import '../assets/css/Display.css'
import NavBar from './NavBar';
import Settings from './Settings';
import Games from './Games';
import Music from './Music';
import CoverFlow from './CoverFlow';

const Display = (props) => {
    console.log('Display',props)
    return(
        <div className="display">
                {props.activePage==="Home"?<NavBar activeItem={props.activeItem}/> : null}
                {props.activePage==='Music'?<Music activeItem={props.activeItem}/> : null}
                {props.activePage==='Games'?<Games /> : null}
                {props.activePage==='Settings'?<Settings /> : null}
                {/* {this.props.activePage==='MyMusic'?<MyMusic audio={this.props.audio} /> : null} */}
                {/* {this.props.activePage==='Artists'?<Artists /> : null} */}
        </div>
    )
}

export default Display;