const ColorProfile = {


currentRGB:
"sRGB IEC61966-2.1",


currentCMYK:
"FOGRA39",



setRGB(profile){

this.currentRGB = profile;

},



setCMYK(profile){

this.currentCMYK = profile;

},



get(){

return {

RGB:this.currentRGB,

CMYK:this.currentCMYK

};

}


};


window.ColorProfile = ColorProfile;
