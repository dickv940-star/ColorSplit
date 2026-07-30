/*
=========================================================
Prepress Panel UI
ColorSplit Pro
Version : 1.0.0
=========================================================
*/


const PrepressPanel = {


container:null,



init(){


this.container =
document.getElementById(
"prepressPanel"
);



if(!this.container){

console.warn(
"Prepress Panel belum tersedia"
);

return;

}


this.render();


},




render(){


this.container.innerHTML = `


<div class="prepress-header">

COLOR SPLIT PRO
<br>
FREEHAND PREPRESS CHECK

</div>



<div id="fileInfoPanel"></div>


<div id="colorInfoPanel"></div>


<div id="objectInfoPanel"></div>


<div id="printInfoPanel"></div>



`;



},



update(data){


if(
typeof ObjectPanel !== "undefined"
){

ObjectPanel.render(
data.objects
);

}



}



};



window.PrepressPanel =
PrepressPanel;
