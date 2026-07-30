/**
 * Channel Panel Engine v1.0
 * ColorSplit Pro
 */


const ChannelPanel = {


channels:{


C:{
name:"CYAN",
visible:true,
opacity:100
},


M:{
name:"MAGENTA",
visible:true,
opacity:100
},


Y:{
name:"YELLOW",
visible:true,
opacity:100
},


K:{
name:"BLACK",
visible:true,
opacity:100
}


},



toggle(code){


this.channels[code].visible =
!this.channels[code].visible;


this.update();


},



setOpacity(code,value){


this.channels[code].opacity =
value;


this.update();


},



update(){


if(
window.SeparationWorkspace
){

SeparationWorkspace.renderChannels(
this.channels
);

}


},



getVisible(){

return this.channels;

}


};



window.ChannelPanel =
ChannelPanel;
