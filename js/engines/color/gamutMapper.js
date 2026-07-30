/*
=========================================================
Gamut Mapper Engine
ColorSplit Pro
=========================================================
*/


"use strict";


const GamutMapper = {



map(rgb){



let result = {


r:
rgb.r,


g:
rgb.g,


b:
rgb.b



};





// limit range

result.r =
Math.max(
0,
Math.min(
255,
result.r
)
);



result.g =
Math.max(
0,
Math.min(
255,
result.g
)
);



result.b =
Math.max(
0,
Math.min(
255,
result.b
)
);



return result;



}



};





window.GamutMapper =
GamutMapper;
