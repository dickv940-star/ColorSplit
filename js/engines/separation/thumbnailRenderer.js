/**
 * Channel Thumbnail Renderer v1.0
 * ColorSplit Pro
 */


const ThumbnailRenderer = {


render(imageData, canvas){


let ctx =
canvas.getContext("2d");


let temp =
document.createElement("canvas");


temp.width =
imageData.width;


temp.height =
imageData.height;


temp.getContext("2d")
.putImageData(
imageData,
0,
0
);



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.drawImage(
temp,
0,
0,
canvas.width,
canvas.height
);


}


};


window.ThumbnailRenderer =
ThumbnailRenderer;
