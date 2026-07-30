/*
=========================================================
ColorSplit Pro
Home Page
Version 1.0.0
=========================================================
*/

function renderHome() {

    const app = document.getElementById("app");

    app.innerHTML = `

    <div class="home">

        <img src="assets/logo.png" class="logo" alt="Logo">

        <h1>ColorSplit Pro</h1>

        <p class="subtitle">
            Automatic CMYK Color Separation
        </p>

        <label class="upload">

            <input
                id="fileInput"
                type="file"
                accept=".png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.pdf">

            <span>Upload File</span>

        </label>

    </div>

    `;

    initializeHome();

}

/*=========================================================
Initialize Home
=========================================================*/

function initializeHome() {

    const input = document.getElementById("fileInput");

    if (!input) {

        console.error("fileInput tidak ditemukan.");

        return;

    }

    input.addEventListener("change", onFileSelected);

}

/*=========================================================
Upload File
=========================================================*/

async function onFileSelected(e) {

    const file = e.target.files[0];

    if (!file)
        return;

    try {

        setStatus("Reading File...");

        showPage("loading");

        /*----------------------------------
        File Reader
        ----------------------------------*/

        if (typeof FileReaderEngine !== "undefined") {

            await FileReaderEngine.open(file);

        } else {

            AppState.file = file;

        }

        /*----------------------------------
        Metadata
        ----------------------------------*/

        if (typeof MetadataReader !== "undefined") {

            await MetadataReader.read(file);

        }

        /*----------------------------------
        Image Loader
        ----------------------------------*/

        if (
            file.type.startsWith("image") &&
            typeof ImageLoader !== "undefined"
        ) {

            await ImageLoader.load(file);

        }

        /*----------------------------------
        Color Detector
        ----------------------------------*/

        if (typeof ColorDetector !== "undefined") {

            await ColorDetector.detect();

        }

        /*----------------------------------
        Workspace
        ----------------------------------*/

        showPage("workspace");

        /*----------------------------------
        Preview
        ----------------------------------*/

        if (typeof PreviewLoader !== "undefined") {

            PreviewLoader.draw();

        }

        setStatus("Ready");

    }

    catch (err) {

        console.error(err);

        alert(err.message);

        showPage("home");

    }

}
