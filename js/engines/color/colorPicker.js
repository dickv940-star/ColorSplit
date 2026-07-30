const ColorPicker = {


init(canvas){

canvas.addEventListener(
"mousemove",
(e)=>{

let rect = canvas.getBoundingClientRect();

let x = Math.floor(
(e.clientX - rect.left)
);

let y = Math.floor(
(e.clientY - rect.top)
);


let ctx = canvas.getContext("2d");

let pixel = ctx.getImageData(
x,
y,
1,
1
).data;


let color = {

r:pixel[0],
g:pixel[1],
b:pixel[2],
a:pixel[3]

};


let cmyk = RGBtoCMYK.convert(
color.r,
color.g,
color.b
);


ColorInspector.show(
color,
cmyk
);


});


}


};
