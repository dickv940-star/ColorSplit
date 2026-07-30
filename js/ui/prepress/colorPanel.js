/*
=========================================================
Color Panel
=========================================================
*/


const ColorPanel = {



render(colors){


let panel =
document.getElementById(
"colorInfoPanel"
);



if(!panel)
return;



panel.innerHTML=`


<h3>
COLOR ANALYSIS
</h3>



${
colors.map(
(color)=>`


<div class="color-item">


RGB :

${color.r},

${color.g},

${color.b}



<br>


CMYK :

${color.cmyk.C}%


${color.cmyk.M}%


${color.cmyk.Y}%


${color.cmyk.K}%



</div>


`
).join("")
}


`;



}



};


window.ColorPanel =
ColorPanel;
