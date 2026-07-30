function renderWorkspace(){

document.getElementById("app").innerHTML=`

<div class="workspace">

    <!-- TOP BAR -->
    <div class="topbar">

        <div class="top-left">

            <strong>ColorSplit Pro</strong>

        </div>

        <div class="top-right">

            <span id="zoomLevel">100%</span>

        </div>

    </div>

    <!-- LEFT PANEL -->

    <div class="sidebar">

        <h3>Channels</h3>

        <button id="btnOriginal">Original</button>

        <button id="btnC">Cyan</button>

        <button id="btnM">Magenta</button>

        <button id="btnY">Yellow</button>

        <button id="btnK">Black</button>

    </div>

    <!-- CENTER -->

    <div class="viewer">

        <canvas id="previewCanvas"></canvas>

    </div>

    <!-- RIGHT PANEL -->

    <div class="properties">

        <h3>File Information</h3>

        <div class="property">
            <label>File Name</label>
            <span>${AppState.file.name}</span>
        </div>

        <div class="property">
            <label>File Size</label>
            <span>${formatFileSize(AppState.file.size)}</span>
        </div>

        <div class="property">
            <label>Type</label>
            <span>${AppState.file.type || "-"}</span>
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
            <label>DPI</label>
            <span id="dpi">-</span>
        </div>

    </div>

    <!-- STATUS BAR -->

    <div class="statusbar">

        <span id="statusText">

            Ready

        </span>

        <span>

            ColorSplit Pro V1.0

        </span>

    </div>

</div>

`;

loadPreview();

}
