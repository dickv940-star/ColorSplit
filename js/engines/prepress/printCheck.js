/**
 * Print Check Engine v1.0
 */


const PrintCheck = {



run(data){


let result={


resolution:
true,


color:
true,


size:
true,


warning:[]

};




if(
data.width < 1000
){

result.warning.push(
"Resolusi rendah"
);

result.resolution=false;

}




if(
data.colorMode !== "CMYK"
){

result.warning.push(
"File masih RGB"
);

result.color=false;

}




return result;


}



};


window.PrintCheck =
PrintCheck;
