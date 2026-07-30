/**
 * Registration Mark Engine
 */


const RegistrationMark = {


draw(ctx,x,y){


ctx.beginPath();

ctx.arc(
x,
y,
10,
0,
Math.PI*2
);


ctx.stroke();



ctx.beginPath();

ctx.moveTo(
x-15,
y
);

ctx.lineTo(
x+15,
y
);


ctx.moveTo(
x,
y-15
);

ctx.lineTo(
x,
y+15
);


ctx.stroke();


}



};


window.RegistrationMark =
RegistrationMark;
