/*
=========================================================
 ColorSplit Pro
 Canvas Engine
 Version : 3.0.0
 Architecture : Workspace PRO
 Author : AppDIGI
=========================================================
*/

"use strict";


window.CanvasEngine = {


    canvas:null,

    ctx:null,



    init:function(){


        console.log(
            "Initializing Canvas Engine"
        );



        this.canvas =
        document.getElementById(
            "previewCanvas"
        );



        if(!this.canvas){


            console.error(
                "Canvas previewCanvas tidak ditemukan"
            );


            return;

        }



        this.ctx =
        this.canvas.getContext(
            "2d"
        );



        WorkspaceState.canvas =
        this.canvas;


        WorkspaceState.ctx =
        this.ctx;



        console.log(
            "✓ Canvas Engine Ready"
        );


    },






    render:function(img){


        if(!this.ctx){


            this.init();

        }



        if(!this.ctx){

            return;

        }



        const canvas =
        this.canvas;



        const maxWidth =
        canvas.width;



        const maxHeight =
        canvas.height;



        let scale =
        Math.min(

            maxWidth / img.width,

            maxHeight / img.height

        );



        const width =
        img.width * scale;



        const height =
        img.height * scale;



        const x =
        (canvas.width-width)/2;



        const y =
        (canvas.height-height)/2;



        this.ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );



        this.ctx.drawImage(

            img,

            x,

            y,

            width,

            height

        );



        console.log(
            "Canvas Rendered"
        );


    }






};


console.log(
"✓ Canvas Engine Loaded"
);
