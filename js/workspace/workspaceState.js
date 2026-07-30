/*
=========================================================
 ColorSplit Pro
 Workspace State Engine
 Version : 3.0.0
 Architecture : Workspace PRO
 Author : AppDIGI
=========================================================
*/

"use strict";


window.WorkspaceState = {


    /*
    =====================================
    IMAGE DATA
    =====================================
    */

    image:null,

    imageData:null,

    width:0,

    height:0,




    /*
    =====================================
    CANVAS
    =====================================
    */

    canvas:null,

    ctx:null,


    zoom:1,


    offsetX:0,

    offsetY:0,





    /*
    =====================================
    CURSOR POSITION
    =====================================
    */

    cursor:{


        x:0,


        y:0


    },





    /*
    =====================================
    COLOR DATA
    =====================================
    */

    color:{


        rgb:{


            r:0,

            g:0,

            b:0


        },



        cmyk:{


            c:0,

            m:0,

            y:0,

            k:0


        },



        hex:"#000000"


    },






    /*
    =====================================
    RESET
    =====================================
    */


    reset:function(){


        this.image=null;


        this.imageData=null;


        this.width=0;


        this.height=0;


        this.zoom=1;


        this.offsetX=0;


        this.offsetY=0;



        this.cursor={

            x:0,

            y:0

        };



        this.color={


            rgb:{r:0,g:0,b:0},


            cmyk:{c:0,m:0,y:0,k:0},


            hex:"#000000"


        };



        console.log(
            "Workspace State Reset"
        );


    }






};





console.log(
    "✓ Workspace State Engine Loaded"
);
