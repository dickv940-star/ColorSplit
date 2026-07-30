/*
=========================================================
ColorSplit Pro
Workspace
Version : 3.0.0
Architecture : Workspace PRO
Author : AppDIGI
=========================================================
*/

"use strict";

const Workspace = {

    app: null,
    canvas: null,
    initialized: false,

    render() {

        this.app = document.getElementById("app");

        if (!this.app) {

            console.error("Workspace container tidak ditemukan.");

            return;

        }

        this.app.innerHTML = this.template();

        this.init();

    },

    template() {

        return `

<div class="workspace">

    ${this.topbar()}

    ${this.sidebar()}

    ${this.viewer()}

    ${this.inspector()}

    ${this.statusbar()}

</div>

`;

    },

    topbar() {

        return `

<div class="topbar">

    <div class="top-left">

        <h1>ColorSplit Pro</h1>

        <span>Professional Prepress Workspace</span>

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

    sidebar() {

        return `

<div class="sidebar">

    <h3>CHANNELS</h3>

    <button id="btnOriginal">Original</button>

    <button id="btnC">Cyan</button>

    <button id="btnM">Magenta</button>

    <button id="btnY">Yellow</button>

    <button id="btnK">Black</button>

    <hr>

    <h3>ACTIONS</h3>

    <button id="btnSeparation">

        Generate CMYK

    </button>

    <button id="btnExport">

        Export Report

    </button>

</div>

`;

    },

    viewer() {

        return `

<div class="viewer">

    <canvas id="previewCanvas"></canvas>

</div>

`;

    },

    inspector() {

        return `

<div class="inspector">

    <div id="colorInspector"></div>

    <hr>

    <h3>IMAGE INFO</h3>

    <div class="property">

        <label>File Name</label>

        <span id="fileName">-</span>

    </div>

    <div class="property">

        <label>Resolution</label>

        <span id="resolution">-</span>

    </div>

    <div class="property">

        <label>DPI</label>

        <span id="dpi">-</span>

    </div>

    <div class="property">

        <label>Color Space</label>

        <span id="colorSpace">-</span>

    </div>

    <div class="property">

        <label>ICC Profile</label>

        <span id="iccProfile">-</span>

    </div>

    <hr>

    <div id="prepressPanel"></div>

</div>

`;

    },

    statusbar() {

        return `

<div class="statusbar">

    <span id="statusText">

        Ready

    </span>

    <span>

        ColorSplit Pro v3.0

    </span>

</div>

`;

    },

    init() {

        this.canvas = document.getElementById("previewCanvas");

        this.bindEvents();

        this.updateMetadata();

        if (typeof PreviewLoader !== "undefined") {

            PreviewLoader.draw();

        }

        if (typeof ColorInspector !== "undefined") {

            ColorInspector.init();

        }

        if (typeof PrepressPanel !== "undefined") {

            PrepressPanel.init();

        }

        this.initialized = true;

        this.updateStatus("Workspace Ready");

    },

    bindEvents() {

        document.getElementById("btnAnalyze")
            ?.addEventListener("click", () => {

                if (typeof analyzePrepress === "function") {

                    analyzePrepress();

                }

            });

    },

    updateMetadata() {

        if (!AppState.metadata) return;

        const m = AppState.metadata;

        this.set("fileName", m.fileName || "-");
        this.set("resolution", `${m.width} × ${m.height}`);
        this.set("dpi", `${m.dpi} DPI`);
        this.set("colorSpace", m.colorSpace || "-");
        this.set("iccProfile", m.iccProfile || "-");

    },

    updateStatus(text) {

        const status = document.getElementById("statusText");

        if (status) {

            status.textContent = text;

        }

    },

    set(id, value) {

        const el = document.getElementById(id);

        if (el) {

            el.textContent = value;

        }

    }

};

window.Workspace = Workspace;
