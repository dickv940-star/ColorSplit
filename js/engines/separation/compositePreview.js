/**
 * CMYK Composite Preview
 */


const CompositePreview = {


render(layers,canvas){


let ctx =
canvas.getContext("2d");


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



Object.keys(layers)
.forEach(channel=>{


let image =
layers[channel];


if(!ChannelPanel.channels[channel].visible)
return;



ctx.globalAlpha =
ChannelPanel.channels[channel]
.opacity/100;



ctx.drawImage(
this.imageDataToCanvas(image),
0,
0
);



});


ctx.globalAlpha=1;


},



imageDataToCanvas(data){


let c =
document.createElement(
"canvas"
);


c.width=data.width;
c.height=data.height;


c.getContext("2d")
.putImageData(
data,
0,
0
);


return c;


}



};


window.CompositePreview =
CompositePreview;
