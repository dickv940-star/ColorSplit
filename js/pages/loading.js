/*
=========================================================
 ColorSplit Pro
 Loading Page Engine
 Version : 3.0.0
 Architecture : Workspace PRO
 Author : AppDIGI
=========================================================
*/


"use strict";



function renderLoading(){


    console.log(
        "Rendering LOADING"
    );



    const app =
    document.getElementById("app");



    if(!app){

        console.error(
            "Application root tidak ditemukan"
        );

        return;

    }



    app.innerHTML = `


    <div class="loading-container">


        <img
        src="./assets/logo.png"
        class="loading-logo"
        alt="ColorSplit Pro">


        <h2>
        Preparing Workspace
        </h2>



        <div class="loader"></div>



        <p id="loadingStatus">
        Initializing Color Engine...
        </p>



    </div>


    `;



    startLoadingSequence();



}





function startLoadingSequence(){


    const status =
    document.getElementById(
        "loadingStatus"
    );



    const steps = [


        "Loading Color Profile...",


        "Checking CMYK Engine...",


        "Preparing Prepress Tools...",


        "Building Workspace..."

    ];



    let index = 0;



    const timer =
    setInterval(function(){


        if(index < steps.length){


            status.innerHTML =
            steps[index];


            index++;


        }
        else{


            clearInterval(timer);



            console.log(
                "Loading Complete"
            );



            showPage(
                "workspace"
            );


        }



    },700);



}







/*=========================================================
 REGISTER ROUTER
=========================================================*/


if(typeof Router !== "undefined"){


    Router.register(
        "loading",
        renderLoading
    );


    console.log(
        "✓ Loading Page Registered"
    );


}
else{


    console.error(
        "Router belum tersedia"
    );


}
