import React from 'react';
import '../assets/css/Body.css'
import Display from './Display';
//to be able to use ZingTouch
import ZingTouch from 'zingtouch'

class Body extends React.Component {

    constructor(){
        super();
        this.state = {
            activePage : "Artists",
            activeItem : "CoverFlow",
            enter : 0
        }
    }
    
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

    backToHome=()=>{
        if(this.state.activeItem === 'Music' || this.state.activeItem === 'Artists' || this.state.activeItem === 'Album' || this.state.activeItem === 'Devotional' || this.state.activeItem === 'AllSongs'){
            this.setState({
                activeItem : 'Music',
                activePage : "Home"
            });
        } else {
            this.setState({
                activeItem: this.state.activeItem,
                activePage: "Home"
            })
        }
    }
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
    render () { 
        return(
            <div className="body">
                <Display
                activeItem={this.state.activeItem}
                activePage={this.state.activePage}
                />
                <div id="buttons" onMouseOver={this.rotateWheel}>
                    <span onClick={this.backToHome}><i class="btn menu fas fa-home"></i></span>
                    <span ><i class="btn prev fas fa-backward"></i></span>
                    <span ><i class="btn next fas fa-forward"></i></span>
                    <span ><i class="btn play fas fa-step-forward"></i></span>
                    <span className="space" onClick={this.changePage}><i class="btn ok far fa-circle"></i></span>
                </div>
            </div>
        )
    }
 }

 export default Body;