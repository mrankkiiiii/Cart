import React from 'react';

const AllSongs = (props) => {
    return(
        <div className="allsongs">
            <div className="topbar" >  
                    <p>i-Pod</p>
                    <img src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
            <div className="artists-container">
                <div className="owner">
                    <div className="owner-image">
                        <img style={{borderRadius: 0}} src="https://i.ytimg.com/vi/60ItHLz5WEA/maxresdefault.jpg" alt="faded"></img>
                    </div>
                    <div className="owner-info">
                        <h4>Faded</h4>
                        <p>Alan Walker</p>
                        <p>Jesper Borgen</p>
                    </div>
                </div>
                <div className="progress-bar">
                    <p id="curr-time">0</p>
                        <div id="seek-bar">
                            <div id="fill"></div>
                        </div>
                    <p id="dur-time">0</p>
                </div>
            </div>
        </div>
    );
}
export default AllSongs;