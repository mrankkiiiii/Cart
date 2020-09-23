import React from 'react';

class AllSongs extends React.Component{
    constructor(){
        super();
        this.state = {
            isMounted : true
        }
        
    }
    componentDidMount(){
        let self = this;  
        self.props.audio.play();
            self.props.audio.addEventListener("timeupdate",function(){
                if(self.state.isMounted){
                    var pos = self.props.audio.currentTime/self.props.audio.duration;
                    self.updateTime();
                    let fill = document.getElementById("fill");
                    if(fill !== null){
                        fill.style.width = pos*100 + "%";
                    }
                }
            })
    }
    updateTime = () =>{  
        this.setState({
            audio : this.props.audio
        });
    }
    componentWillUnmount(){
        this.state.isMounted = false;
    }
    render(){ 
        let audio = this.props.audio;
        return(
            <div className="allsongs">
                {/* Top bar */}
                <div className="topbar" >  
                        <p>i-Pod</p>
                        <img src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                    </div>
                {/* songs information */}
                <div className="artists-container">
                    <div className="owner">
                        <div className="owner-image">
                            <img style={{borderRadius: 10}} src="https://i.ytimg.com/vi/60ItHLz5WEA/maxresdefault.jpg" alt="faded"></img>
                        </div>
                        <div className="owner-info">
                            <h4>Faded</h4>
                            <p>Alan Walker</p>
                            <p>Jesper Borgen</p>
                        </div>
                    </div>
                    {/* Progress bar of the song */}
                    <div className="progress-bar">
                        <p id="curr-time">{audio !== null ? `${Math.floor(audio.currentTime/60)} : ${Math.floor(audio.currentTime - Math.floor(audio.currentTime/60)*60) }` : ''}</p>
                            <div id="seek-bar">
                                <div id="fill"></div>
                            </div>
                        <p id="dur-time">{audio != null ? `${Math.floor(audio.duration/60)} : ${Math.floor(audio.duration - Math.floor(audio.duration/60)*60)}` : ''}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default AllSongs;