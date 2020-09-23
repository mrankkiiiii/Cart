import React from 'react';
import '../assets/css/Body.css'
import Display from './Display';
//to be able to use ZingTouch
import ZingTouch from 'zingtouch'
import song from '../assets/Music/Faded.mp3'

class Body extends React.Component {

    constructor(){
        super();
        this.state = {
            activePage : "Home",
            activeItem : "CoverFlow",
            enter : 0,
            play: true,
        }
    }
    // Zingtouch functioon for rotating functionality
    rotateWheel = () => {
        var rotatebuttons = document.getElementById("buttons");
        var region = new ZingTouch.Region(rotatebuttons);
        var self= this;
        var change = 0;
        this.state.enter = this.state.enter+1;
        if(this.state.enter<2)
        {
            region.bind(rotatebuttons, 'rotate', function(event) {
                var newAngle = Math.floor(event.detail.distanceFromLast)
                if(newAngle<0){
                    change++;
                    if(change==15){
                        change = 0;
                        if(self.state.activePage === "Home"){
                                if(self.state.activeItem === 'CoverFlow'){
                                    self.setState({
                                        activeItem : 'Music',
                                    });
                                } else if(self.state.activeItem === 'Music'){
                                    self.setState({
                                        activeItem : 'Games',
                                    });
                                } else if(self.state.activeItem === 'Games'){
                                    self.setState({
                                        activeItem : 'Settings',
                                    });
                                } else if(self.state.activeItem === 'Settings'){
                                    self.setState({
                                        activeItem : 'CoverFlow',
                                    });
                                }
                            } else if(self.state.activePage === "Music"){
                                if(self.state.activeItem === 'AllSongs'){
                                    self.setState({
                                        activeItem : 'Album',
                                    });
                                } else if(self.state.activeItem === 'Album'){
                                    self.setState({
                                        activeItem : 'Artists',
                                    });
                                } else if(self.state.activeItem === 'Artists'){
                                    self.setState({
                                        activeItem : 'Devotional',
                                    });
                                } else if(self.state.activeItem === 'Devotional'){
                                    self.setState({
                                        activeItem : 'AllSongs',
                                    });
                                }
                            }
                        }
                    } else {
                        change++;
                        if(change==15){
                            change = 0;
                            if(self.state.activePage === "Home"){
                                    if(self.state.activeItem === 'CoverFlow'){
                                        self.setState({
                                            activeItem : 'Music',
                                        });
                                    } else if(self.state.activeItem === 'Music'){
                                        self.setState({
                                            activeItem : 'Games',
                                        });
                                    } else if(self.state.activeItem === 'Games'){
                                        self.setState({
                                            activeItem : 'Settings',
                                        });
                                    } else if(self.state.activeItem === 'Settings'){
                                        self.setState({
                                            activeItem : 'CoverFlow',
                                        });
                                    }
                                } else if(self.state.activePage === "Music"){
                                    if(self.state.activeItem === 'AllSongs'){
                                        self.setState({
                                            activeItem : 'Album',
                                        });
                                    } else if(self.state.activeItem === 'Album'){
                                        self.setState({
                                            activeItem : 'Artists',
                                        });
                                    } else if(self.state.activeItem === 'Artists'){
                                        self.setState({
                                            activeItem : 'Devotional',
                                        });
                                    } else if(self.state.activeItem === 'Devotional'){
                                        self.setState({
                                            activeItem : 'AllSongs',
                                        });
                                    }
                                }
                            }
                        }
                    });
            }else{
                console.log('no enter');
            }
        }
    // menu button for return to home
    backToHome=()=>{
        if(this.state.activePage === 'Music' && (this.state.activeItem === 'Artists' || this.state.activeItem === 'Album' || this.state.activeItem === 'Devotional' || this.state.activeItem === 'AllSongs')){
            this.setState({
                activeItem : 'Music',
                activePage : "Home"
            });
        } else if(this.state.activeItem === 'Artists' || this.state.activeItem === 'Album' || this.state.activeItem === 'Devotional' || this.state.activeItem === 'AllSongs'){
            this.setState({
                activeItem: 'AllSongs',
                activePage: 'Music'
            });
        } else {
            this.setState({
                activeItem: this.state.activeItem,
                activePage: "Home"
            });
        }
    }
    // function to enter in the particular component
    changePage =()=>{
            if(this.state.activeItem === 'Music'){
                this.setState({
                    activeItem : 'AllSongs',
                    activePage : this.state.activeItem
                });
            } else {
                this.setState({
                    activeItem: this.state.activeItem,
                    activePage: this.state.activeItem,
                });
            }
    }
    // function to play pause the music
    toggle = () =>{
        if(this.state.activePage === "AllSongs"){
            if(this.state.play === true){
                this.state.audio.pause();
                this.setState({
                    play: false
                });
            } else {
                this.state.audio.play();
                this.setState({
                    play: true
                });
            }
        }
    }
    componentDidMount(){
        let audio = document.getElementsByClassName('song')[0];
        this.setState({
            audio: audio
        });
    }
    render () { 
        return(
            <div className="body">
                {/* Demo Audio for play */}
               <audio className="song">
                    <source src={song} type="audio/mp3"></source>    
                </audio>
                {/* Display Component */}
                {this.state.audio && <Display
                activeItem={this.state.activeItem}
                activePage={this.state.activePage}
                audio={this.state.audio}
                />}
                {/* I-Pod Buttons With ZingTouch */}
                <div id="buttons" onMouseOver={this.rotateWheel}>
                    <span onClick={this.backToHome} title="Home"><i className="btn menu fas fa-home"></i></span>
                    <span title="Previous" ><i className="btn prev fas fa-backward"></i></span>
                    <span title="Forward"><i className="btn next fas fa-forward"></i></span>
                    <span onClick={this.toggle} title="Play/Pause"><i className="btn play fas fa-step-forward"></i></span>
                    <span className="space" onClick={this.changePage} title="OK"><i className="btn ok far fa-circle"></i></span>
                </div>
            </div>
        )
    }
 }
 export default Body;