/*
=========================================================
ColorSplit Pro
Home Page
Version : 1.0.0
=========================================================
*/

"use strict";

/*=========================================================
RENDER HOME
=========================================================*/

function renderHome() {

    const app = document.getElementById("app");

    app.innerHTML = `

    <div class="home">

        <img src="assets/logo.png"
             class="logo"
             alt="ColorSplit Pro">

        <h1>ColorSplit Pro</h1>

        <p class="subtitle">
            Professional CMYK Color Separation
        </p>

        <label class="upload">

            <input
                id="fileInput"
                type="file"
                accept=".png,.jpg,.jpeg,.bmp,.webp,.tif,.tiff,.pdf">

            <span>Upload File</span>

        </label>

    </div>

    `;

    initializeHome();

}

/*=========================================================
INITIALIZE HOME
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
FILE SELECTED
=========================================================*/

async function onFileSelected(event) {

    const file = event.target.files[0];

    if (!file)
        return;

    try {

        showPage("loading");

        updateLoading("Reading File...");

        /*------------------------------------------
        FILE READER
        ------------------------------------------*/

        if (typeof FileReaderEngine !== "undefined") {

            await FileReaderEngine.open(file);

        } else {

            AppState.file = file;

        }

        updateLoading("Reading Metadata...");

        /*------------------------------------------
        METADATA
        ------------------------------------------*/

        if (typeof MetadataReader !== "undefined") {

            await MetadataReader.read(file);

        }

        /*------------------------------------------
        IMAGE
        ------------------------------------------*/

        if (
            file.type.startsWith("image") &&
            typeof ImageLoader !== "undefined"
        ) {

            updateLoading("Loading Image...");

            await ImageLoader.load(file);

        }

        /*------------------------------------------
        COLOR
        ------------------------------------------*/

        if (typeof ColorDetector !== "undefined") {

            updateLoading("Detecting Color Space...");

            await ColorDetector.detect();
            updateWorkspaceMetadata();
        }

        /*------------------------------------------
        WORKSPACE
        ------------------------------------------*/

        updateLoading("Opening Workspace...");

        showPage("workspace");

        /*------------------------------------------
        PREVIEW
        ------------------------------------------*/

        if (typeof PreviewLoader !== "undefined") {

            PreviewLoader.draw();

        }

        updateStatus("Ready");

    }
    catch (error) {

        console.error(error);

        alert(error.message || error);

        showPage("home");

    }

}
