/**
 * Export Manager v1.0
 * ColorSplit Pro
 */


const ExportManager = {



exportPNG(canvas,name){


let link =
document.createElement(
"a"
);


link.download =
name+".png";


link.href =
canvas.toDataURL(
"image/png"
);


link.click();


},




exportAll(layers){


Object.keys(layers)
.forEach(
key=>{


let canvas =
document.createElement(
"canvas"
);


canvas.width =
layers[key].width;


canvas.height =
layers[key].height;


canvas.getContext("2d")
.putImageData(
layers[key],
0,
0
);



this.exportPNG(
canvas,
"separation_"+key
);


});


}



};



window.ExportManager =
ExportManager;
