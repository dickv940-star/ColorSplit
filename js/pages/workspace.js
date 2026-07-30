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
