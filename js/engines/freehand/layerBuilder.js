/*
=========================================================
Layer Builder Engine
=========================================================
*/


const LayerBuilder = {



layers:[],



create(objects){



this.layers=[{


name:
"Layer 1",


objects:
objects


}];



return this.layers;



},



get(){


return this.layers;


}



};



window.LayerBuilder =
LayerBuilder;
