/*
=========================================================
ICC Converter Engine
ColorSplit Pro
Version : 2.0.0
=========================================================
*/


"use strict";


const ICCConverter = {



profile:
"FOGRA39",





init(){


console.log(
"ICC Converter Ready"
);


},





setProfile(profile){


this.profile =
profile;



},





convertRGBtoCMYK(rgb){



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
Math.round(k*100),



profile:
this.profile



};



}





};




window.ICCConverter =
ICCConverter;
