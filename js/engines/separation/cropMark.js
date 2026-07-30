/**
 * Crop Mark Engine
 */


const CropMark = {


size:20,



draw(ctx,x,y){


let s=this.size;



ctx.beginPath();


ctx.moveTo(
x-s,
y
);


ctx.lineTo(
x+s,
y
);


ctx.moveTo(
x,
y-s
);


ctx.lineTo(
x,
y+s
);


ctx.stroke();



}


};


window.CropMark =
CropMark;
