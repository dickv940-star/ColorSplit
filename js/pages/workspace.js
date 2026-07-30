/*
=========================================================
ColorSplit Pro
Workspace PRO
Version : 3.0.0
Architecture : Prepress Workspace
Author : AppDIGI
=========================================================
*/

"use strict";

const Workspace = {

    app: null,

    canvas: null,

    initialized: false,

    /*
    =========================================================
    RENDER
    =========================================================
    */

    render() {

        this.app = document.getElementById("app");

        if (!this.app) {

            console.error("Workspace container tidak ditemukan.");

            return;

        }

        this.app.innerHTML = this.template();

        this.init();

    },

    /*
    =========================================================
    TEMPLATE
    =========================================================
    */

    template() {

        return `

<div class="workspace">

    ${this.renderTopbar()}

    ${this.renderSidebar()}

    ${this.renderViewer()}

    ${this.renderInspector()}

    ${this.renderStatusbar()}

</div>

`;

    },
/*
=========================================================
TOPBAR
=========================================================
*/

renderTopbar(){

return `

<div class="topbar">

    <div class="top-left">

        <h1>

            ColorSplit Pro

        </h1>

        <span>

            Professional Prepress Workspace

        </span>

    </div>

    <div class="top-right">

        <button id="btnAnalyze">

            Analyze

        </button>

        <span id="zoomLevel">

            100%

        </span>

    </div>

</div>

`;

},

/*
=========================================================
SIDEBAR
=========================================================
*/

renderSidebar(){

return `

<div class="sidebar">

<h3>

Channels

</h3>

<button id="btnOriginal">

Original

</button>

<button id="btnC">

Cyan

</button>

<button id="btnM">

Magenta

</button>

<button id="btnY">

Yellow

</button>

<button id="btnK">

Black

</button>

<hr>

<h3>

Actions

</h3>

<button id="btnSeparation">

Generate CMYK

</button>

<button id="btnExport">

Export Report

</button>

</div>

`;

},  

 /*
=========================================================
VIEWER
=========================================================
*/

renderViewer(){

return `

<div class="viewer">

<canvas id="previewCanvas"></canvas>

</div>

`;

},   

/*
=========================================================
INSPECTOR
=========================================================
*/

renderInspector(){

return `

<div class="inspector">

<div id="colorInspector">

</div>

<hr>

<h3>

Image Information

</h3>

<div class="property">

<label>

File Name

</label>

<span id="fileName">

-

</span>

</div>

<div class="property">

<label>

Resolution

</label>

<span id="resolution">

-

</span>

</div>

<div class="property">

<label>

Color Space

</label>

<span id="colorSpace">

-

</span>

</div>

<div class="property">

<label>

ICC Profile

</label>

<span id="iccProfile">

-

</span>

</div>

<div class="property">

<label>

DPI

</label>

<span id="dpi">

96 DPI

</span>

</div>

<hr>

<div id="prepressPanel">

</div>

</div>

`;

},   

   /*
=========================================================
STATUSBAR
=========================================================
*/

renderStatusbar(){

return `

<div class="statusbar">

<span id="statusText">

Workspace Ready

</span>

<span>

ColorSplit Pro v3.0

</span>

</div>

`;

},

   /*
=========================================================
STATUSBAR
=========================================================
*/

renderStatusbar(){

return `

<div class="statusbar">

<span id="statusText">

Workspace Ready

</span>

<span>

ColorSplit Pro v3.0

</span>

</div>

`;

}, 

 /*
=========================================================
INITIALIZE
=========================================================
*/

init() {

    this.canvas = document.getElementById("previewCanvas");

    this.bindEvents();

    this.updateMetadata();

    this.initializeModules();

    this.initialized = true;

    this.updateStatus("Workspace Ready");

}
  /*
=========================================================
INITIALIZE MODULES
=========================================================
*/

initializeModules() {

    /*
    =========================
    Preview
    =========================
    */

    if (typeof PreviewLoader !== "undefined") {

        PreviewLoader.draw();

        console.log("✓ Preview Loader Ready");

    }

    /*
    =========================
    Color Inspector
    =========================
    */

    if (typeof ColorInspector !== "undefined") {

        ColorInspector.init();

        console.log("✓ Color Inspector Ready");

    }

    /*
    =========================
    Prepress Panel
    =========================
    */

    if (typeof PrepressPanel !== "undefined") {

        PrepressPanel.init();

        console.log("✓ Prepress Panel Ready");

    }

}
 /*
=========================================================
UPDATE METADATA
=========================================================
*/

updateMetadata() {

    if (!AppState.metadata) return;

    const m = AppState.metadata;

    this.set("fileName", m.fileName || "-");

    this.set(
        "resolution",
        `${m.width || 0} × ${m.height || 0}`
    );

    this.set(
        "dpi",
        `${m.dpi || 96} DPI`
    );

    this.set(
        "colorSpace",
        m.colorSpace || "Unknown"
    );

    this.set(
        "iccProfile",
        m.iccProfile || "-"
    );

}

/*
=========================================================
STATUS
=========================================================
*/

updateStatus(text) {

    const status = document.getElementById("statusText");

    if (status) {

        status.textContent = text;

    }

}   

/*
=========================================================
SET VALUE
=========================================================
*/

set(id, value) {

    const el = document.getElementById(id);

    if (el) {

        el.textContent = value;

    }

}
/*
=========================================================
EVENT
=========================================================
*/

bindEvents() {

    const btnAnalyze = document.getElementById("btnAnalyze");

    if (btnAnalyze) {

        btnAnalyze.addEventListener("click", () => {

            this.updateStatus("Analyzing...");

            if (typeof analyzePrepress === "function") {

                analyzePrepress();

            }

        });

    }

}

};

function renderWorkspace() {

    Workspace.render();

}

window.Workspace = Workspace;

window.renderWorkspace = renderWorkspace;

