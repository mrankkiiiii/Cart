import React from 'react';

const Album = (props) => {
    return(
        <div className="album">
            {/* Top bar */}
            <div className="topbar" >  
                    <p>i-Pod</p>
                    <img src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
            <div className="album-container">
            <p>Album</p>
            </div>
        </div>
    );
}
export default Album;