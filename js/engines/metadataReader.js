/*
=========================================================
ColorSplit Pro
Metadata Reader
Version 2.0
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

                AppState.metadata.mime = file.type;

                AppState.metadata.size = file.size;

                AppState.metadata.width = img.width;

                AppState.metadata.height = img.height;

                AppState.metadata.aspectRatio =
                    simplifyRatio(img.width,img.height);

                AppState.metadata.alpha =
                    file.type==="image/png" ||
                    file.type==="image/webp";

                AppState.metadata.bitDepth="8-bit";

                AppState.metadata.dpi=96;

                resolve();

            };

            img.onerror=reject;

            img.src=URL.createObjectURL(file);

        });

    }

};
