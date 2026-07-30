/*
=========================================================
 ColorSplit Pro
 Home Page Engine
 Version : 3.0.0
 Architecture : Workspace PRO
 Author : AppDIGI
=========================================================
*/


"use strict";



/*=========================================================
 HOME RENDERER
=========================================================*/


function renderHome(){


    console.log(
        "Rendering HOME"
    );



    const app =
    document.getElementById("app");



    if(!app){

        console.error(
            "Application root #app tidak ditemukan"
        );

        return;

    }



    app.innerHTML = `


    <div class="home-container">


        <div class="home-header">


            <img
            src="./assets/logo.png"
            class="home-logo"
            alt="ColorSplit Pro"
            >



            <h1>
                ColorSplit Pro
            </h1>



            <p>
                Professional CMYK Color Separation
                and Prepress Workspace
            </p>


        </div>





        <div class="home-card">


            <div class="feature">


                <h3>
                    🎨 Color Science Engine
                </h3>


                <p>
                    ICC Profile,
                    CMYK Separation,
                    Soft Proof,
                    Delta E Analysis
                </p>


            </div>




            <div class="feature">


                <h3>
                    🖨 Prepress Analyzer
                </h3>


                <p>
                    Object Detection,
                    Fill,
                    Stroke,
                    Text,
                    Layer Analysis
                </p>


            </div>





            <div class="feature">


                <h3>
                    ✋ FreeHand Support
                </h3>


                <p>
                    Professional workflow
                    for printing preparation
                </p>


            </div>


        </div>






        <button
        class="start-button"
        id="startWorkspaceBtn">

            START WORKSPACE

        </button>





        <div class="version-info">

            ColorSplit Pro v3.0.0
            <br>
            AppDIGI Professional Edition

        </div>




    </div>


    `;




    bindHomeEvents();



}







/*=========================================================
 HOME EVENTS
=========================================================*/


function bindHomeEvents(){



    const button =
    document.getElementById(
        "startWorkspaceBtn"
    );



    if(button){


        button.onclick = function(){


            console.log(
                "Opening Workspace"
            );



            showPage(
                "loading"
            );



        };


    }


}







/*=========================================================
 REGISTER ROUTER
=========================================================*/


if(
typeof Router !== "undefined"
){


    Router.register(
        "home",
        renderHome
    );


    console.log(
        "✓ Home Page Registered"
    );


}
else{


    console.error(
        "Router belum tersedia"
    );


}
