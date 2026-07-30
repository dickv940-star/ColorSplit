const RGBtoCMYK = {

convert(r,g,b){

let rr=r/255;
let gg=g/255;
let bb=b/255;


let k = 1 - Math.max(
rr,
gg,
bb
);


let c =
(1-rr-k)/(1-k)||0;

let m =
(1-gg-k)/(1-k)||0;

let y =
(1-bb-k)/(1-k)||0;


return {

C:(c*100).toFixed(1),
M:(m*100).toFixed(1),
Y:(y*100).toFixed(1),
K:(k*100).toFixed(1)

};


}

};
