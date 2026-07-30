/**
 * Layer Manager v1.0
 * ColorSplit Pro
 */


const LayerManager = {


layers:[

{
name:"Cyan",
code:"C",
visible:true
},

{
name:"Magenta",
code:"M",
visible:true
},

{
name:"Yellow",
code:"Y",
visible:true
},

{
name:"Black",
code:"K",
visible:true
}

],



toggle(code){


let layer =
this.layers.find(
l=>l.code===code
);


if(layer){

layer.visible =
!layer.visible;

}


},



get(){

return this.layers;

}



};


window.LayerManager =
LayerManager;
