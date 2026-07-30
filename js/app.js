/*
=========================================================
ColorSplit Pro
Application Bootstrap
Version : 2.0.0
Architecture : Prepress Color Engine
Author : AppDIGI
=========================================================
*/

"use strict";


const APP = {

    name: "ColorSplit Pro",

    version: "2.0.0",

    author: "AppDIGI",

    build: "Prepress Engine"


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
        "Build   :",
        APP.build
    );

    console.log(
        "========================================"
    );



    /*
    CHECK CORE
    */


    if(
        typeof AppState === "undefined"
    ){

        console.error(
            "AppState tidak ditemukan."
        );

        return;

    }



    if(
        typeof showPage !== "function"
    ){

        console.error(
            "Router belum siap."
        );

        return;

    }



    initializeState();


    initializeEngines();



    showPage(
        "home"
    );



    updateStatus(
        "ColorSplit Pro Ready"
    );


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



    /*
    FILE DATA
    */


    AppState.file =
    null;


    AppState.image =
    null;


    AppState.preview =
    null;




    /*
    METADATA
    */


    AppState.metadata = {


        name:"",


        type:"",


        size:0,


        extension:"",


        width:0,


        height:0,


        dpi:96,


        aspectRatio:"",


        colorSpace:"Unknown",


        bitDepth:"",


        alpha:false,


        iccProfile:"",


        modified:""


    };




    /*
    COLOR ENGINE DATA
    */


    AppState.colors = [];



    AppState.selectedColor =
    null;



    AppState.cmyk = {


        C:0,

        M:0,

        Y:0,

        K:0


    };




    /*
    SEPARATION DATA
    */


    AppState.layers = {


        C:null,

        M:null,

        Y:null,

        K:null


    };




    AppState.separation = {


        ready:false,


        profile:
        "FOGRA39",


        inkLimit:
        300,


        halftone:false


    };





    /*
    FREEHAND DATA
    */


    AppState.freehand = {


        ready:false,


        objects:[],


        layers:[],


        report:null


    };





    /*
    PRINT DATA
    */


    AppState.print = {


        dpi:300,


        profile:
        "Coated FOGRA39",


        colorMode:
        "CMYK",


        ready:false


    };



    console.log(
        "State Initialized"
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
    COLOR ENGINE
    =========================
    */



    if(
        typeof ICCConverter !== "undefined"
    ){


        ICCConverter.init();


        console.log(
            "✓ ICC Converter"
        );


    }




    if(
        typeof ColorInspector !== "undefined"
    ){


        ColorInspector.init();


        console.log(
            "✓ Color Inspector"
        );


    }




    if(
        typeof ColorHistory !== "undefined"
    ){


        ColorHistory.load();


        console.log(
            "✓ Color History"
        );


    }




    if(
        typeof PaletteManager !== "undefined"
    ){


        PaletteManager.load();


        console.log(
            "✓ Palette Manager"
        );


    }




    /*
    =========================
    SEPARATION ENGINE
    =========================
    */



    if(
        typeof SeparationWorkspace !== "undefined"
    ){


        SeparationWorkspace.init();


        console.log(
            "✓ Separation Workspace"
        );


    }





    if(
        typeof CMYKSeparation !== "undefined"
    ){


        console.log(
            "✓ CMYK Separation Engine"
        );


    }





    if(
        typeof HalftoneEngine !== "undefined"
    ){


        console.log(
            "✓ Halftone Engine"
        );


    }





    /*
    =========================
    FREEHAND PREPRESS ENGINE
    =========================
    */



    if(
        typeof FreeHandAnalyzer !== "undefined"
    ){


        console.log(
            "✓ FreeHand Analyzer"
        );


    }




    if(
        typeof PrintCheck !== "undefined"
    ){


        console.log(
            "✓ Print Check"
        );


    }

/*
=========================
PREPRESS UI
=========================
*/


if(
typeof PrepressPanel !== "undefined"
){

    PrepressPanel.init();


    console.log(
        "✓ Prepress Panel UI"
    );

}



if(
typeof ObjectPanel !== "undefined"
){

    console.log(
        "✓ Object Panel"
    );

}



if(
typeof ColorPanel !== "undefined"
){

    console.log(
        "✓ Color Panel"
    );

}



if(
typeof PrintPanel !== "undefined"
){

    console.log(
        "✓ Print Panel"
    );

}

    console.log(
        "All Engines Loaded"
    );

}

/*
=========================
FREEHAND CORE ENGINE
=========================
*/


if(
    typeof ObjectDetector !== "undefined"
){

    console.log(
        "✓ Object Detector"
    );

}



if(
    typeof FillDetector !== "undefined"
){

    console.log(
        "✓ Fill Detector"
    );

}



if(
    typeof StrokeDetector !== "undefined"
){

    console.log(
        "✓ Stroke Detector"
    );

}



if(
    typeof TextDetector !== "undefined"
){

    console.log(
        "✓ Text Detector"
    );

}



if(
    typeof LayerBuilder !== "undefined"
){

    console.log(
        "✓ Layer Builder"
    );

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
ERROR HANDLER
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
APPLICATION INFO
=========================================================*/


function getAppInfo(){


    return {


        name:
        APP.name,


        version:
        APP.version,


        author:
        APP.author,


        build:
        APP.build


    };


}



window.ColorSplitAPP =
APP;


console.log(
    "Bootstrap Loaded"
);
