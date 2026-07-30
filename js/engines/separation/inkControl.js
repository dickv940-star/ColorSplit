/**
 * Ink Density Controller
 */


const InkControl = {


density:{


C:100,
M:100,
Y:100,
K:100


},



set(channel,value){


this.density[channel]=
Number(value);


},



apply(value,channel){


return value *
(
this.density[channel]/100
);


},



get(){

return this.density;

}


};


window.InkControl =
InkControl;
