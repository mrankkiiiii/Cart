import React from 'react';
import '../assets/css/Body.css'
import Display from './Display';
import ZingTouch from 'zingtouch'

class Body extends React.Component {

    constructor(){
        super();
        this.state = {
            activePage : "Home",
            activeItem : "CoverFlow",
            enter : 0
        }
    }
    
    rotateWheel = () => {
        var rotatebuttons = document.getElementById("buttons");
        var region = new ZingTouch.Region(rotatebuttons);
        var self= this;
        this.state.enter = this.state.enter+1;
        if(this.state.enter<2)
        {
            region.bind(rotatebuttons, 'rotate', function(event) {
                var newAngle = Math.floor(event.detail.distanceFromLast)
                if(newAngle<0){
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
                        }
                    } else {
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
                            }
                        }
                    });
            }else{
                console.log('no enter');
            }
        }

    backToHome=()=>{
        this.setState({
            activeItem: this.state.activeItem,
            activePage: "Home"
        })
    }
    changePage =()=>{
        this.setState({
            activeItem: this.state.activeItem,
            activePage: this.state.activeItem,
        });
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