/*
=========================================================
 ColorSplit Pro
 Workspace Color Inspector Engine
 Version : 3.0.0
 Author : AppDIGI
=========================================================
*/

"use strict";


window.PixelInspector = {


    init:function(){


        const canvas =
        document.getElementById(
            "previewCanvas"
        );


        if(!canvas){

            console.error(
                "Canvas tidak ditemukan"
            );

            return;

        }



        canvas.addEventListener(
            "mousemove",
            function(e){

                PixelInspector.inspect(e);

            }
        );



        console.log(
            "✓ Pixel Inspector Ready"
        );


    },






    inspect:function(e){


        const canvas =
        WorkspaceState.canvas;



        const ctx =
        WorkspaceState.ctx;



        const rect =
        canvas.getBoundingClientRect();



        const x =
        Math.floor(
            e.clientX - rect.left
        );



        const y =
        Math.floor(
            e.clientY - rect.top
        );



        const pixel =
        ctx.getImageData(
            x,
            y,
            1,
            1
        ).data;



        const rgb = {


            r:pixel[0],

            g:pixel[1],

            b:pixel[2]


        };



        const hex =
        "#" +

        rgb.r.toString(16).padStart(2,"0") +

        rgb.g.toString(16).padStart(2,"0") +

        rgb.b.toString(16).padStart(2,"0");




        const cmyk =
        PixelInspector.rgbToCMYK(
            rgb.r,
            rgb.g,
            rgb.b
        );



        WorkspaceState.color.rgb =
        rgb;



        WorkspaceState.color.hex =
        hex;



        WorkspaceState.color.cmyk =
        cmyk;



        PixelInspector.updatePanel(
            x,
            y,
            rgb,
            cmyk,
            hex
        );



    },







    rgbToCMYK:function(r,g,b){


        let c = 1-r/255;
        let m = 1-g/255;
        let y = 1-b/255;


        let k =
        Math.min(c,m,y);



        if(k===1){

            return {
                c:0,
                m:0,
                y:0,
                k:100
            };

        }



        return {


            c:Math.round(
                ((c-k)/(1-k))*100
            ),


            m:Math.round(
                ((m-k)/(1-k))*100
            ),


            y:Math.round(
                ((y-k)/(1-k))*100
            ),


            k:Math.round(
                k*100
            )


        };


    }






};
