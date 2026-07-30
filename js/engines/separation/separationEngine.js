/**
 * Print Separation Engine v1.0
 * ColorSplit Pro
 */


const SeparationEngine = {


    layers:{},



    process(canvas){


        console.log(
            "Start CMYK Separation..."
        );


        this.layers =
        CMYKSeparation.separate(
            canvas
        );


        console.log(
            "Separation Complete",
            this.layers
        );


        return this.layers;


    },



    getLayer(type){


        return this.layers[type];


    }



};



window.SeparationEngine =
SeparationEngine;
