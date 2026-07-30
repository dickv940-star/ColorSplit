/*
=========================================================
Adobe Color Profile Database
ColorSplit Pro
Version : 1.0.0
=========================================================
*/


"use strict";


const AdobeProfile = {



profiles:{



sRGB:{


name:
"sRGB IEC61966-2.1",


type:
"RGB",


gamma:
2.2



},




AdobeRGB:{


name:
"Adobe RGB (1998)",


type:
"RGB",


gamma:
2.2



},




FOGRA39:{


name:
"Coated FOGRA39",


type:
"CMYK",


paper:
"Coated Paper",


dotGain:
15



},




GRACoL:{


name:
"GRACoL 2013",


type:
"CMYK",


paper:
"Commercial Print"


}




},







get(name){


return this.profiles[name];


},




list(){


return Object.keys(
this.profiles
);


}



};





window.AdobeProfile =
AdobeProfile;
