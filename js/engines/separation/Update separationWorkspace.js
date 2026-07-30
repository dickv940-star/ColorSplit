render(){


this.container.innerHTML=`

<div class="workspace-title">

CMYK SEPARATION PRO

</div>



<div class="main-preview">

<canvas id="compositeCanvas">

</canvas>

</div>



<div id="channelPanel">


</div>



<div class="workspace-actions">


<button>
CMYK COMPOSITE
</button>


<button>
EXPORT PNG
</button>


<button>
EXPORT PDF
</button>


</div>


`;


this.renderChannels(
ChannelPanel.channels
);


},




renderChannels(channels){


let panel =
document.getElementById(
"channelPanel"
);



panel.innerHTML="";


Object.keys(channels)
.forEach(code=>{


let c =
channels[code];


panel.innerHTML +=`

<div class="channel-item">


<button onclick="
ChannelPanel.toggle('${code}')
">

${c.visible?"👁":"○"}

</button>



<b>
${code}
-
${c.name}
</b>



<input
type="range"
min="0"
max="100"
value="${c.opacity}"
oninput="
ChannelPanel.setOpacity(
'${code}',
this.value
)
">


</div>


`;


});


}
