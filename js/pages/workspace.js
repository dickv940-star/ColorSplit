/*
=========================================================
 ColorSplit Pro
 Workspace Page Engine
 Version : 3.0.0
 Architecture : Workspace PRO
 Author : AppDIGI
=========================================================
*/

"use strict";



function renderWorkspace(){


    console.log(
        "Rendering WORKSPACE"
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

    <div class="workspace">


        <header class="workspace-header">


            <div class="brand">

                <img 
                src="./assets/logo.png">

                <span>
                ColorSplit Pro
                </span>

            </div>


            <div class="version">

                v3.0.0

            </div>


        </header>





        <div class="toolbar">


            <button id="openFileBtn">
OPEN FILE
</button>


            <button>
                COLOR INSPECTOR
            </button>


            <button>
                CMYK SEPARATION
            </button>


            <button>
                SOFT PROOF
            </button>


            <button>
                EXPORT
            </button>


        </div>






        <main class="workspace-main">



            <section class="canvas-area">


                <div class="canvas-placeholder">


                    PREVIEW CANVAS


                </div>


            </section>






            <aside class="right-panel">


                <div class="panel">


                    <h3>
                    COLOR INSPECTOR
                    </h3>


                    <pre>

Position

X : -
Y : -


RGB

R : -
G : -
B : -


CMYK

C : -
M : -
Y : -
K : -

HEX

#------

                    </pre>


                </div>






                <div class="panel">


                    <h3>
                    PREPRESS
                    </h3>


                    <p>
                    Object Detection
                    </p>


                    <p>
                    Fill Detector
                    </p>


                    <p>
                    Stroke Detector
                    </p>


                    <p>
                    Layer Builder
                    </p>


                </div>



            </aside>



        </main>



    </div>


    `;



    initWorkspace();


}







function initWorkspace(){


    console.log(
        "Workspace Initialized"
    );



}


function initWorkspace(){


    console.log(
        "Workspace Initialized"
    );



    WorkspaceFile.init();



    const btn =
    document.getElementById(
        "openFileBtn"
    );



    if(btn){


        btn.onclick=function(){


            WorkspaceFile.select();


        };


    }


}




/*=========================================================
 REGISTER ROUTER
=========================================================*/


if(typeof Router !== "undefined"){


    Router.register(
        "workspace",
        renderWorkspace
    );


    console.log(
        "✓ Workspace Page Registered"
    );


}
else{


    console.error(
        "Router belum tersedia"
    );


}
