function loadImage(file){

    return new Promise(resolve=>{

        const img=new Image();

        img.onload=function(){

            AppState.image=img;

            AppState.metadata.width=img.width;

            AppState.metadata.height=img.height;

            AppState.metadata.aspectRatio=
                simplifyRatio(img.width,img.height);

            AppState.metadata.alpha=
                file.type==="image/png";

            detectColorSpace(img);

            resolve();

        }

        img.src=URL.createObjectURL(file);

    });

}
