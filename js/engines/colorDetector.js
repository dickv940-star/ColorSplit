/*
=========================================================
Color Detector
=========================================================
*/

"use strict";

const ColorDetector={

    async detect(){

        if(!AppState.image)
            return;

        AppState.metadata.colorSpace="RGB";

        if(AppState.metadata.alpha){

            AppState.metadata.colorSpace+=" + Alpha";

        }

    }

};
