/*
=========================================================
ColorSplit Pro
Application Bootstrap
Version : 1.0.0
=========================================================
*/

"use strict";

const APP = {

    name: "ColorSplit Pro",

    version: "1.0.0",

    author: "AppDIGI",

    build: "1.0.0"

};

/*=========================================================
APPLICATION START
=========================================================*/

window.addEventListener("load", initApp);

function initApp() {

    console.clear();

    console.log("========================================");
    console.log(APP.name);
    console.log("Version :", APP.version);
    console.log("Author  :", APP.author);
    console.log("========================================");

    if (typeof AppState === "undefined") {

        console.error("AppState tidak ditemukan.");

        return;

    }

    if (typeof Router === "undefined") {

        console.error("Router tidak ditemukan.");

        return;

    }

    initializeState();

    showPage("home");

    console.log("Application Ready");

}

/*=========================================================
INITIALIZE STATE
=========================================================*/

function initializeState() {

    AppState.page = "home";

    AppState.file = null;

    AppState.image = null;

    AppState.preview = null;

    AppState.metadata = {

        name: "",

        type: "",

        size: 0,

        extension: "",

        width: 0,

        height: 0,

        dpi: 96,

        aspectRatio: "",

        colorSpace: "Unknown",

        bitDepth: "",

        alpha: false,

        iccProfile: "",

        modified: ""

    };

}

/*=========================================================
STATUS BAR
=========================================================*/

function updateStatus(text) {

    const status = document.getElementById("statusText");

    if (status) {

        status.textContent = text;

    }

}

/*=========================================================
LOADING TEXT
=========================================================*/

function updateLoading(text) {

    const loading = document.getElementById("loadingText");

    if (loading) {

        loading.textContent = text;

    }

}

/*=========================================================
ERROR
=========================================================*/

function showError(error) {

    console.error(error);

    alert(error);

}
