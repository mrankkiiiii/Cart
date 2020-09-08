import React from 'react';
import './Body.css'
import Display from './Display';

const Body = () => {
    return(
        <div className="body">
            <Display
  
            />
            <div className="action-buttons">
                <button className="btn menu">MENU</button>
                <button className="btn prev"><img src="https://image.flaticon.com/icons/svg/3039/3039440.svg"/></button>
                <button className="btn next"><img src="https://image.flaticon.com/icons/svg/3039/3039514.svg"/></button>
                <button className="btn play"><img src="https://image.flaticon.com/icons/svg/0/135.svg"/></button>
                <span className="space"></span>
            </div>
        </div>
    )
 }

 export default Body;