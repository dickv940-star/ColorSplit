/*
=========================================================
Fill Detector Engine
=========================================================
*/


const FillDetector = {



detect(imageData){


    let colors={};



    for(
        let i=0;
        i<imageData.data.length;
        i+=4
    ){


        let r =
        imageData.data[i];


        let g =
        imageData.data[i+1];


        let b =
        imageData.data[i+2];



        let key =
        `${r},${g},${b}`;



        colors[key] =
        (colors[key]||0)+1;


    }



    let result =
    Object.keys(colors)
    .sort(
        (a,b)=>
        colors[b]-colors[a]
    )
    [0];



    if(!result)
        return null;



    let rgb =
    result.split(",")
    .map(Number);



    return {


        type:
        "solid",


        rgb:{


            r:rgb[0],

            g:rgb[1],

            b:rgb[2]


        },



        cmyk:
        ICCConverter
        .convertRGBtoCMYK({

            r:rgb[0],

            g:rgb[1],

            b:rgb[2]

        })



    };



}



};



window.FillDetector =
FillDetector;
