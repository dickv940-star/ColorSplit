/**
 * Paper Simulation Engine
 */


const PaperSimulation = {


enabled:true,


paper:"#f4f1e8",



apply(ctx,canvas){


if(!this.enabled)
return;



ctx.globalCompositeOperation =
"destination-over";


ctx.fillStyle =
this.paper;


ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);


ctx.globalCompositeOperation =
"source-over";


},



setPaper(color){

this.paper=color;

}


};


window.PaperSimulation =
PaperSimulation;
