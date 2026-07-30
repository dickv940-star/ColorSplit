/*
=========================================================
Color Detector
Version 2.0
=========================================================
*/

"use strict";

const ColorDetector={

    async detect(){

        if(!AppState.image)
            return;

        const canvas=document.createElement("canvas");

        canvas.width=AppState.image.width;

        canvas.height=AppState.image.height;

        const ctx=canvas.getContext("2d");

        ctx.drawImage(AppState.image,0,0);

        const img=ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        ).data;

        let gray=true;

        let alpha=false;

        for(let i=0;i<img.length;i+=4){

            const r=img[i];

            const g=img[i+1];

            const b=img[i+2];

            const a=img[i+3];

            if(r!==g||g!==b){

                gray=false;

            }

            if(a<255){

                alpha=true;

            }

        }

        let space="RGB";

        if(gray)
            space="Grayscale";

        if(alpha)
            space+=" + Alpha";

        AppState.metadata.colorSpace=space;

        AppState.metadata.alpha=alpha;

    }

};
