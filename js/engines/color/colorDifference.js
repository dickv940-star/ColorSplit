/*
=========================================================
Color Difference Engine
Delta E Basic
ColorSplit Pro
=========================================================
*/


"use strict";


const ColorDifference = {



compare(rgb1,rgb2){



let dr =
rgb1.r-rgb2.r;


let dg =
rgb1.g-rgb2.g;


let db =
rgb1.b-rgb2.b;



let delta =
Math.sqrt(

(dr*dr)+
(dg*dg)+
(db*db)

);



return {


deltaE:
Math.round(
delta
),


match:

delta < 5



};



}



};



window.ColorDifference =
ColorDifference;
