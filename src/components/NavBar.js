import React from 'react';

const NavBar = (props) => {
    return(
        <div className="nav">
            <div className="topbar">  
                    <p>i-Pod</p>
                    <img style={styles.topNavImg} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
            <ul className="nav-menu">
                <li id="cover" className={props.activeItem==="CoverFlow"? 'active' : ''}>
                    <span><i class="fas fa-stream"></i></span>Cover Flow
                    {props.activeItem==='CoverFlow'?<span style={styles.activeIcon}>&gt;</span>:''}
                    </li>
                <li id="music" className={props.activeItem==='Music'? 'active': ''}>
                    <span><i class="fas fa-music"></i></span>Music
                    {props.activeItem==='Music'?<span style={styles.activeIcon}>&gt;</span>:''}
                </li>
                <li id="games" className={props.activeItem==='Games'? 'active': ''}>
                    <span><i class="fas fa-trophy"></i></span>Games
                    {props.activeItem==='Games'?<span style={styles.activeIcon}>&gt;</span>:''}
                </li>
                <li id="setting" className={props.activeItem==='Settings'? 'active': ''}>
                    <span><i class="fas fa-cog"></i></span>Settings
                    {props.activeItem==='Settings'?<span style={styles.activeIcon}>&gt;</span>:''}
                </li>
            </ul>
        </div>
    );
}
const styles ={
    activeIcon: {
        float:'right',
        fontWeight:'bolder',
    },
    topNavImg: {
        left: '58%'
    }
}
export default NavBar