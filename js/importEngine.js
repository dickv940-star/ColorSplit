/*
===========================================
Import Engine
ColorSplit Pro
===========================================
*/

async function importFile(file){

    AppState.file=file;

    updateStatus("Reading File...");

    readBasicMetadata(file);

    if(file.type.startsWith("image")){

        await loadImage(file);

    }

}
