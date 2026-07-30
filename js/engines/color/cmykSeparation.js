/**
 * CMYK Separation Engine v1.0
 * ColorSplit Pro
 */


const CMYKSeparation = {



    separate(canvas){


        let ctx =
        canvas.getContext(
            "2d"
        );


        let image =
        ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );


        let channels={


            C:
            new ImageData(
                canvas.width,
                canvas.height
            ),


            M:
            new ImageData(
                canvas.width,
                canvas.height
            ),


            Y:
            new ImageData(
                canvas.width,
                canvas.height
            ),


            K:
            new ImageData(
                canvas.width,
                canvas.height
            )


        };




        for(
            let i=0;
            i<image.data.length;
            i+=4
        ){


            let r =
            image.data[i];


            let g =
            image.data[i+1];


            let b =
            image.data[i+2];



            let cmyk =
            ICCConverter
            .convertRGBtoCMYK(
                {
                    r,g,b
                }
            );



            this.write(
                channels.C,
                i,
                cmyk.C
            );


            this.write(
                channels.M,
                i,
                cmyk.M
            );


            this.write(
                channels.Y,
                i,
                cmyk.Y
            );


            this.write(
                channels.K,
                i,
                cmyk.K
            );



        }



        return channels;


    },




    write(image,index,value){


        let v =
        255 -
        Math.round(
            value*2.55
        );


        image.data[index]=v;

        image.data[index+1]=v;

        image.data[index+2]=v;

        image.data[index+3]=255;


    }



};


window.CMYKSeparation =
CMYKSeparation;
