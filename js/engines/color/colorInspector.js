/*
=========================================================
Color Inspector Engine
ColorSplit Pro
Version : 2.0.0

Realtime RGB / CMYK / HEX Inspector
Photoshop Style Color Sampling
=========================================================
*/


"use strict";


const ColorInspector = {



panel:null,


canvas:null,


ctx:null,


enabled:true,





/*=========================================================
INIT
=========================================================*/


init(){



    this.panel =
    document.getElementById(
        "colorInspector"
    );



    this.canvas =
    document.getElementById(
        "previewCanvas"
    );



    if(!this.panel){


        console.warn(
            "Color Inspector panel tidak ditemukan"
        );


    }



    if(!this.canvas){


        console.warn(
            "Preview Canvas tidak ditemukan"
        );


        return false;

    }



    this.ctx =
    this.canvas.getContext(
        "2d"
    );



    this.bind();



    console.log(
        "✓ Color Inspector Ready"
    );


    return true;


},







/*=========================================================
MOUSE LISTENER
=========================================================*/


bind(){



this.canvas.addEventListener(
"mousemove",
(e)=>{


    if(!this.enabled)
        return;



    const rect =
    this.canvas.getBoundingClientRect();



    const x =
    Math.floor(
        e.clientX -
        rect.left
    );



    const y =
    Math.floor(
        e.clientY -
        rect.top
    );



    this.pick(
        x,
        y
    );



});


},







/*=========================================================
PICK COLOR
=========================================================*/


pick(x,y){



    if(
    !this.ctx
    )
    return;




    let pixel =
    this.ctx.getImageData(
        x,
        y,
        1,
        1
    ).data;



    let rgb = {


        r:pixel[0],


        g:pixel[1],


        b:pixel[2]


    };





    let cmyk;



    if(
    typeof ICCConverter !== "undefined"
    ){


        cmyk =
        ICCConverter.convertRGBtoCMYK(
            rgb
        );


    }
    else{


        cmyk =
        this.rgbToCMYK(
            rgb
        );


    }






    AppState.selectedColor =
    {


        rgb:rgb,


        cmyk:cmyk,


        x:x,


        y:y


    };






    this.show(
        rgb,
        cmyk,
        x,
        y
    );



},







/*=========================================================
DISPLAY
=========================================================*/


show(rgb,cmyk,x,y){



if(!this.panel)
return;




let hex =
this.rgbToHex(
rgb.r,
rgb.g,
rgb.b
);





this.panel.innerHTML = `



<div class="ci-header">

COLOR INSPECTOR

</div>



<div class="ci-preview"

style="
background:rgb(
${rgb.r},
${rgb.g},
${rgb.b}
);
">

</div>





<div class="ci-section">


<h4>

POSITION

</h4>


X :
${x}


<br>


Y :
${y}



</div>







<div class="ci-section">


<h4>
RGB
</h4>


R :
${rgb.r}


<br>


G :
${rgb.g}


<br>


B :
${rgb.b}



</div>






<div class="ci-section">


<h4>
CMYK
</h4>


C :
${cmyk.C}%


<br>


M :
${cmyk.M}%


<br>


Y :
${cmyk.Y}%


<br>


K :
${cmyk.K}%



</div>






<div class="ci-section">


<h4>
HEX
</h4>


<div class="ci-hex">

${hex}

</div>



</div>


`;



},







/*=========================================================
RGB TO HEX
=========================================================*/


rgbToHex(r,g,b){



return "#"+

[r,g,b]

.map(
x=>{


let hex =
x.toString(16);


return hex.length===1?
"0"+hex:
hex;


}

)

.join("")

.toUpperCase();


},







/*=========================================================
FALLBACK CMYK
=========================================================
*/


rgbToCMYK(rgb){



let r =
rgb.r / 255;


let g =
rgb.g / 255;


let b =
rgb.b / 255;



let k =
1 -
Math.max(
r,
g,
b
);



let c =
(1-r-k) /
(1-k || 1);



let m =
(1-g-k) /
(1-k || 1);



let y =
(1-b-k) /
(1-k || 1);




return {


C:
Math.round(c*100),


M:
Math.round(m*100),


Y:
Math.round(y*100),


K:
Math.round(k*100)



};


},







/*=========================================================
CLEAR
=========================================================
*/


clear(){


if(this.panel){


this.panel.innerHTML="";


}



}




};





window.ColorInspector =
ColorInspector;



console.log(
"Color Inspector Engine Loaded"
);
