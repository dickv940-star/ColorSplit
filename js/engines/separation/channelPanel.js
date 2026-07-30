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

panel.innerHTML +=`

<div class="channel-item">


<canvas
id="thumb-${code}"
width="80"
height="60">
</canvas>


<button>

${c.visible?"👁":"○"}

</button>


<b>
${code}
 ${c.name}
</b>


<input
type="range"
min="0"
max="150"
value="${c.opacity}"
>


</div>

`;
