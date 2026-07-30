/*
=========================================================
 ColorSplit Pro
 Workspace File Open Engine
 Version : 3.0.0
 Author : AppDIGI
=========================================================
*/

"use strict";


window.WorkspaceFile = {


    input:null,



    init:function(){


        console.log(
            "Initializing Workspace File"
        );



        this.input =
        document.createElement("input");


        this.input.type = "file";


        this.input.accept =
        "image/*";



        this.input.style.display =
        "none";



        document.body.appendChild(
            this.input
        );



        this.input.addEventListener(
            "change",
            function(e){


                const file =
                e.target.files[0];



                if(file){

                    WorkspaceFile.open(file);

                }


            }
        );



        console.log(
            "✓ File Open Ready"
        );


    },





    select:function(){


        this.input.click();


    },






    open:function(file){


        console.log(
            "Opening File:",
            file.name
        );



        const reader =
        new FileReader();



        reader.onload=function(e){


            const img =
            new Image();



            img.onload=function(){


                WorkspaceState.image =
                img;


                WorkspaceState.width =
                img.width;


                WorkspaceState.height =
                img.height;



                console.log(
                    "Image Loaded",
                    img.width,
                    "x",
                    img.height
                );



                if(
                window.CanvasEngine
                ){

                    CanvasEngine.render(
                        img
                    );

                }


            };



            img.src =
            e.target.result;


        };



        reader.readAsDataURL(
            file
        );



    }


};





console.log(
"✓ Workspace File Engine Loaded"
);
