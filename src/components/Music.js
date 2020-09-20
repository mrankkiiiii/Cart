import React from 'react';

const Music = (props) => {
    console.log('Music',props)
    return(
        <div className="nav">
            <div className="topbar">  
                    <p>i-Pod</p>
                    <img style={styles.topNavImg} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
            <ul className="nav-menu">
                <li id="cover" className={props.activeItem==="AllSongs"? 'active' : ''}>
                    <span><i class="fas fa-music"></i></span>All Songs
                    {props.activeItem==='AllSongs'?<span style={styles.activeIcon}>&gt;</span>:''}
                    </li>
                <li id="album" className={props.activeItem==='Album'? 'active': ''}>
                    <span><i class="fas fa-compact-disc"></i></span>Album
                    {props.activeItem==='Album'?<span style={styles.activeIcon}>&gt;</span>:''}
                </li>
                <li id="artists" className={props.activeItem==='Artists'? 'active': ''}>
                    <span><i class="fas fa-user"></i></span>Artists
                    {props.activeItem==='Artists'?<span style={styles.activeIcon}>&gt;</span>:''}
                </li>
                <li id="devotional" className={props.activeItem==='Devotional'? 'active': ''}>
                    <span><i class="fas fa-om"></i></span>Devotional
                    {props.activeItem==='Devotional'?<span style={styles.activeIcon}>&gt;</span>:''}
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
export default Music;