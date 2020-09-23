import React from 'react';
import image from '../assets/images/personal.jpg';
const Artists = (props) => {
    return(
        <div className="artists">
            {/* Top bar */}
            <div className="topbar" >  
                    <p>i-Pod</p>
                    <img src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
            </div>
            {/* Artists information but currently it conatains mine 😄 */}
            <div className="artists-container">
                <div className="owner">
                    <div className="owner-image">
                        <img src={image} alt="owner"></img>
                    </div>
                    <div className="owner-info">
                        <h4>IPod.Js <span><img src="https://www.flaticon.com/svg/static/icons/svg/953/953909.svg"></img></span></h4>
                        <p>React Project</p>
                        <p>Made By Ankur Agrawal</p>
                    </div>
                </div>
                <p>Thanks for visiting 🙂</p>
            </div>
        </div>
    );
}
export default Artists;