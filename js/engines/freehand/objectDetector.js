/*
=========================================================
Object Detector Engine
ColorSplit Pro
Version : 1.0.0
=========================================================
*/


const ObjectDetector = {


    objects:[],



    analyze(canvas){


        console.log(
            "Detecting Objects..."
        );



        this.objects=[];



        let object={


            id:
            Date.now(),


            type:
            "image",


            x:0,


            y:0,


            width:
            canvas.width,


            height:
            canvas.height,


            rotation:0



        };



        this.objects.push(
            object
        );



        return this.objects;


    },



    get(){


        return this.objects;


    }



};



window.ObjectDetector =
ObjectDetector;
