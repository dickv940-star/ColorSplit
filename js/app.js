/*
=========================================================
ColorSplit Pro
Application Bootstrap
Version : 3.0.0
Architecture : Prepress Engine
Author : AppDIGI
=========================================================
*/


"use strict";



const APP = {


    name:
    "ColorSplit Pro",


    version:
    "3.0.0",


    author:
    "AppDIGI",


    build:
    "Prepress Engine"



};






/*=========================================================
APPLICATION START
=========================================================*/


window.addEventListener(
"load",
initApp
);







function initApp(){



    console.clear();




    console.log(
    "========================================"
    );


    console.log(
    APP.name
    );


    console.log(
    "Version :",
    APP.version
    );


    console.log(
    "Author  :",
    APP.author
    );


    console.log(
    "========================================"
    );





    if(
    typeof AppState === "undefined"
    ){


        console.error(
        "AppState tidak ditemukan"
        );


        return;


    }







    initializeState();




    initializeEngines();




    if(
    typeof showPage === "function"
    ){


        showPage(
        "home"
        );


    }
    else{


        console.error(
        "Router belum siap"
        );


    }






    AppState.ready =
    true;





    console.log(
    "Application Ready"
    );



}









/*=========================================================
STATE INITIALIZATION
=========================================================*/


function initializeState(){



    AppState.page =
    "home";



    AppState.file =
    null;



    AppState.image =
    null;



    AppState.preview =
    null;



    AppState.canvas =
    null;



    console.log(
    "✓ State Initialized"
    );



}









/*=========================================================
ENGINE LOADER
=========================================================*/


function initializeEngines(){



console.log(
"Loading Engines..."
);





/*
=========================
FILE ENGINE
=========================
*/


loadEngine(
"File Reader",
typeof FileReaderEngine
);



loadEngine(
"Metadata Reader",
typeof MetadataReader
);



loadEngine(
"Image Loader",
typeof ImageLoader
);



loadEngine(
"Preview Loader",
typeof PreviewLoader
);









/*
=========================
COLOR ENGINE
=========================
*/


loadEngine(
"ICC Converter",
typeof ICCConverter
);



loadEngine(
"Adobe Profile",
typeof AdobeProfile
);



loadEngine(
"Gamut Mapper",
typeof GamutMapper
);



loadEngine(
"Color Difference",
typeof ColorDifference
);



loadEngine(
"Color Inspector",
typeof ColorInspector
);



loadEngine(
"Color History",
typeof ColorHistory
);



loadEngine(
"Palette Manager",
typeof PaletteManager
);









/*
=========================
SEPARATION ENGINE
=========================
*/


loadEngine(
"CMYK Separation",
typeof CMYKSeparation
);



loadEngine(
"Soft Proof",
typeof SoftProof
);



loadEngine(
"Delta E",
typeof DeltaE
);



loadEngine(
"Halftone Engine",
typeof HalftoneEngine
);









/*
=========================
FREEHAND ENGINE
=========================
*/


loadEngine(
"Object Detector",
typeof ObjectDetector
);



loadEngine(
"Fill Detector",
typeof FillDetector
);



loadEngine(
"Stroke Detector",
typeof StrokeDetector
);



loadEngine(
"Text Detector",
typeof TextDetector
);



loadEngine(
"Layer Builder",
typeof LayerBuilder
);



loadEngine(
"FreeHand Analyzer",
typeof FreeHandAnalyzer
);





/*=========================================================
ENGINE CHECK
=========================================================*/


function loadEngine(
name,
engine
){



if(
engine !== "undefined"
){


    console.log(
    "✓",
    name
    );


}
else{


    console.warn(
    "✕",
    name,
    "Not Found"
    );


}



}









/*=========================================================
STATUS
=========================================================*/


function updateStatus(text){



const status =
document.getElementById(
"statusText"
);



if(status){


    status.textContent =
    text;


}



}









/*=========================================================
LOADING
=========================================================*/


function updateLoading(text){



const loading =
document.getElementById(
"loadingText"
);



if(loading){


    loading.textContent =
    text;


}



}









/*=========================================================
ERROR
=========================================================*/


function showError(error){



console.error(
error
);



updateStatus(
"Error"
);



alert(
error
);



}









/*=========================================================
GLOBAL EXPORT
=========================================================*/


window.APP =
APP;



window.initializeEngines =
initializeEngines;



window.updateStatus =
updateStatus;



console.log(
"App.js v3.0 Loaded"
);
