import React from 'react';

const Devotional = (props) => {
    return(
        <div className="devotional">
            {/* Top bar */}
            <div className="topbar" >  
                    <p>i-Pod</p>
                    <img src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
            <div className="devotional-container">
               <p>Devotional</p>
            </div>
        </div>
    );
}
export default Devotional;