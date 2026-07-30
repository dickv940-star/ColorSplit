/*
=========================================================
ColorSplit Pro
Application State
Version : 3.0.0
Architecture : Prepress Engine
Author : AppDIGI
=========================================================
*/

"use strict";


const AppState = {


    /*
    =========================
    APPLICATION
    =========================
    */


    page:"home",


    version:"3.0.0",


    ready:false,




    /*
    =========================
    FILE
    =========================
    */


    file:null,


    image:null,


    preview:null,


    canvas:null,





    /*
    =========================
    METADATA
    =========================
    */


    metadata:{


        fileName:"",


        extension:"",


        mime:"",


        size:0,



        width:0,


        height:0,


        dpi:96,



        colorSpace:"Unknown",


        bitDepth:"Unknown",


        alpha:false,


        aspectRatio:"",


        iccProfile:"-",


        created:"",


        modified:""



    },







    /*
    =========================
    COLOR ENGINE
    =========================
    */


    colors:[],


    dominantColors:[],


    selectedColor:null,



    colorHistory:[],


    palette:[],




    /*
    =========================
    COLOR CONVERSION
    =========================
    */


    rgb:{


        r:0,

        g:0,

        b:0


    },



    cmyk:{


        C:0,

        M:0,

        Y:0,

        K:0


    },



    colorProfile:{


        input:"RGB",


        output:"CMYK",


        icc:"FOGRA39"


    },







    /*
    =========================
    SEPARATION ENGINE
    =========================
    */


    separation:{


        ready:false,


        generated:false,


        profile:"FOGRA39",


        inkLimit:300,


        channels:{


            C:null,


            M:null,


            Y:null,


            K:null


        }


    },






    /*
    =========================
    HALFTONE ENGINE
    =========================
    */


    halftone:{


        enabled:false,


        lpi:45,


        angle:{


            C:15,


            M:75,


            Y:0,


            K:45


        },


        shape:"round"



    },







    /*
    =========================
    FREEHAND ENGINE
    =========================
    */


    freehand:{


        ready:false,


        objects:[],


        layers:[],


        texts:[],


        shapes:[],


        strokes:[],


        fills:[],


        report:null



    },







    /*
    =========================
    VECTOR ENGINE
    =========================
    */


    vector:{


        enabled:false,


        paths:[],


        nodes:[],


        curves:[]



    },







    /*
    =========================
    PRINT PREFLIGHT
    =========================
    */


    print:{


        ready:false,


        dpi:300,


        colorMode:"CMYK",


        profile:"Coated FOGRA39",


        paper:"",


        warnings:[]



    },







    /*
    =========================
    EXPORT
    =========================
    */


    export:{


        format:null,


        file:null,


        ready:false,


        data:null



    },







    /*
    =========================
    SETTINGS
    =========================
    */


    settings:{


        autoAnalyze:true,


        autoCMYK:false,


        showGrid:false,


        previewQuality:"high",


        language:"id"



    }



};





/*
=========================================================
STATE ACCESS
=========================================================
*/


window.AppState = AppState;



console.log(
"AppState v3.0 Loaded"
);
