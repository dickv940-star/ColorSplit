function loadPreview(){

    if(!AppState.file)
        return;

    const canvas=document.getElementById("previewCanvas");

    const ctx=canvas.getContext("2d");

    if(AppState.file.type.startsWith("image")){

        const img=new Image();

        img.onload=function(){

            canvas.width=img.width;

            canvas.height=img.height;

            ctx.drawImage(img,0,0);

            document.getElementById("resolution").innerText=
                img.width+" x "+img.height;

            document.getElementById("statusText").innerText=
                "Image Loaded";

        }

        img.src=URL.createObjectURL(AppState.file);

    }

}
