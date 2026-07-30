/*
==========================================
ColorSplit Pro
Main Application
Version : 1.0.0
==========================================
*/

window.addEventListener("load", initApp);

function initApp() {

    console.log("==================================");
    console.log(" ColorSplit Pro");
    console.log(" Version 1.0.0");
    console.log(" Initializing...");
    console.log("==================================");

    // Pastikan AppState tersedia
    if (typeof AppState === "undefined") {
        console.error("AppState not found!");
        return;
    }

    // Pastikan Router tersedia
    if (typeof showPage !== "function") {
        console.error("Router not found!");
        return;
    }

    // Reset State
    resetState();

    // Tampilkan Home
    showPage("home");

    console.log("Application Ready");
}

/* ==========================================
   GLOBAL STATE
========================================== */

function resetState() {

    AppState.page = "home";

    AppState.file = null;

    AppState.preview = null;

    AppState.colorSpace = null;

    AppState.width = 0;

    AppState.height = 0;

    AppState.dpi = 0;

}

/* ==========================================
   NAVIGATION
========================================== */

function goHome() {

    resetState();

    showPage("home");

}

function goLoading() {

    showPage("loading");

}

function goWorkspace() {

    showPage("workspace");

}

/* ==========================================
   STATUS
========================================== */

function setStatus(text) {

    const el = document.getElementById("statusText");

    if (el) {

        el.innerText = text;

    }

}

/* ==========================================
   LOADING TEXT
========================================== */

function setLoading(text) {

    const el = document.getElementById("loadingText");

    if (el) {

        el.innerText = text;

    }

}

/* ==========================================
   ERROR
========================================== */

function showError(message) {

    console.error(message);

    alert(message);

}

/* ==========================================
   APP VERSION
========================================== */

const APP = {

    name: "ColorSplit Pro",

    version: "1.0.0",

    author: "AppDIGI"

};
