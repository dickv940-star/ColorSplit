/*
=========================================
Preview Loader
=========================================
*/

const PreviewLoader = {

    draw() {

        const canvas = document.getElementById("previewCanvas");

        if (!canvas)
            return;

        const ctx = canvas.getContext("2d");

        const img = AppState.image;

        canvas.width = img.width;

        canvas.height = img.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0);

        updateStatus("Preview Ready");

    }

};
