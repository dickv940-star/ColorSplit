/**
 * Halftone Engine v1.0
 * ColorSplit Pro
 */


const HalftoneEngine = {



    settings:{


        size:8,

        angle:45


    },



    generate(
        imageData
    ){


        let canvas =
        document.createElement(
            "canvas"
        );


        canvas.width =
        imageData.width;


        canvas.height =
        imageData.height;



        let ctx =
        canvas.getContext(
            "2d"
        );


        ctx.putImageData(
            imageData,
            0,
            0
        );



        let output =
        ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );



        let step =
        this.settings.size;



        for(
            let y=0;
            y<canvas.height;
            y+=step
        ){


            for(
                let x=0;
                x<canvas.width;
                x+=step
            ){


                let index =
                (
                y*canvas.width+x
                )*4;



                let gray =
                output.data[index];



                let radius =
                (
                255-gray
                )/
                255*
                step/2;



                ctx.beginPath();

                ctx.arc(
                    x,
                    y,
                    radius,
                    0,
                    Math.PI*2
                );


                ctx.fill();


            }

        }


        return canvas;


    }



};


window.HalftoneEngine =
HalftoneEngine;
