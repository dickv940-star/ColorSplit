/*
=========================================================
ColorSplit Pro
Metadata Reader Engine
Version : 2.0.0
=========================================================
*/

"use strict";

const MetadataReader = {

    async read(file){

        return new Promise((resolve,reject)=>{

            const img = new Image();

            img.onload = ()=>{

                AppState.metadata.fileName = file.name;

                AppState.metadata.extension =
                    file.name.split(".").pop().toUpperCase();

                AppState.metadata.mime =
                    file.type;

                AppState.metadata.size =
                    file.size;

                AppState.metadata.width =
                    img.width;

                AppState.metadata.height =
                    img.height;

                AppState.metadata.aspectRatio =
                    getAspectRatio(
                        img.width,
                        img.height
                    );

                AppState.metadata.dpi = 96;

                AppState.metadata.bitDepth = "8-bit";

                AppState.metadata.alpha =
                    (
                        file.type==="image/png" ||
                        file.type==="image/webp"
                    );

                AppState.metadata.iccProfile =
                    "sRGB";

                resolve();

            };

            img.onerror = reject;

            img.src = URL.createObjectURL(file);

        });

    }

};

/*=========================================================
Aspect Ratio
=========================================================*/

function getAspectRatio(w,h){

    let a=w;

    let b=h;

    while(b){

        let t=b;

        b=a%b;

        a=t;

    }

    return (w/a)+" : "+(h/a);

}
