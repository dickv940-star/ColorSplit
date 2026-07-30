/*
=========================================================
ColorSplit Pro
Workspace Page
Version : 2.0.0
=========================================================
*/

"use strict";

/*=========================================================
RENDER WORKSPACE
=========================================================*/

function renderWorkspace() {

    const app = document.getElementById("app");

    const file = AppState.file || {};

    app.innerHTML = `

<div class="workspace">

    <!-- ================= TOP BAR ================= -->

    <div class="topbar">

        <div class="top-left">

            <strong>ColorSplit Pro</strong>

        </div>

        <div class="top-right">

            <span id="zoomLevel">100%</span>

        </div>

    </div>

    <!-- ================= LEFT ================= -->

    <div class="sidebar">

        <h3>Channels</h3>

        <button id="btnOriginal">Original</button>

        <button id="btnC">Cyan</button>

        <button id="btnM">Magenta</button>

        <button id="btnY">Yellow</button>

        <button id="btnK">Black</button>

    </div>

    <!-- ================= CENTER ================= -->

    <div class="viewer">

        <canvas id="previewCanvas"></canvas>

    </div>

    <!-- ================= RIGHT ================= -->

    <div class="properties">

        <h3>File Information</h3>

        <div class="property">
            <label>File Name</label>
            <span id="fileName">${file.name || "-"}</span>
        </div>

        <div class="property">
            <label>File Size</label>
            <span id="fileSize">
                ${file.size ? formatFileSize(file.size) : "-"}
            </span>
        </div>

        <div class="property">
            <label>Type</label>
            <span id="fileType">${file.type || "-"}</span>
        </div>

        <div class="property">
            <label>Extension</label>
            <span id="extension">-</span>
        </div>

        <div class="property">
            <label>Color Space</label>
            <span id="colorSpace">Detecting...</span>
        </div>

        <div class="property">
            <label>Resolution</label>
            <span id="resolution">-</span>
        </div>

        <div class="property">
            <label>Aspect Ratio</label>
            <span id="aspectRatio">-</span>
        </div>

        <div class="property">
            <label>Bit Depth</label>
            <span id="bitDepth">-</span>
        </div>

        <div class="property">
            <label>Alpha Channel</label>
            <span id="alpha">-</span>
        </div>

        <div class="property">
            <label>DPI</label>
            <span id="dpi">-</span>
        </div>

        <div class="property">
            <label>ICC Profile</label>
            <span id="iccProfile">-</span>
        </div>

    </div>

    <!-- ================= STATUS ================= -->

    <div class="statusbar">

        <span id="statusText">

            Ready

        </span>

        <span>

            ColorSplit Pro V2.0

        </span>

    </div>

</div>

`;

    /*=========================================
      DRAW PREVIEW
    =========================================*/

    if (typeof PreviewLoader !== "undefined") {

        PreviewLoader.draw();

    }

    /*=========================================
      UPDATE METADATA
    =========================================*/

    updateWorkspaceMetadata();

}

/*=========================================================
UPDATE METADATA PANEL
=========================================================*/

function updateWorkspaceMetadata() {

    if (!AppState.metadata)
        return;

    const m = AppState.metadata;

    setValue("fileName", m.fileName || "-");
    setValue("extension", m.extension || "-");
    setValue("fileType", m.mime || "-");
    setValue("fileSize", formatFileSize(m.size || 0));

    setValue("colorSpace", m.colorSpace || "Unknown");

    setValue(
        "resolution",
        (m.width || 0) + " × " + (m.height || 0)
    );

    setValue("aspectRatio", m.aspectRatio || "-");

    setValue("bitDepth", m.bitDepth || "-");

    setValue(
        "alpha",
        m.alpha ? "Yes" : "No"
    );

    setValue(
        "dpi",
        (m.dpi || 96) + " DPI"
    );

    setValue(
        "iccProfile",
        m.iccProfile || "-"
    );

}

/*=========================================================
SET VALUE
=========================================================*/

function setValue(id, value) {

    const el = document.getElementById(id);

    if (el) {

        el.textContent = value;

    }

}

/*=========================================================
CHANNEL BUTTONS
=========================================================*/

document.addEventListener("click", function (e) {

    switch (e.target.id) {

        case "btnOriginal":

            if (typeof PreviewLoader !== "undefined")
                PreviewLoader.draw();

            updateStatus("Original Preview");

            break;

        case "btnC":

            updateStatus("Cyan Channel");

            break;

        case "btnM":

            updateStatus("Magenta Channel");

            break;

        case "btnY":

            updateStatus("Yellow Channel");

            break;

        case "btnK":

            updateStatus("Black Channel");

            break;

    }

});
