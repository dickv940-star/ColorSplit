/*
=========================================================
ColorSplit Pro
Router Engine V2
=========================================================
*/

"use strict";

const Router = {

    current: "home",

    pages: {

        home: "renderHome",

        loading: "renderLoading",

        workspace: "Workspace.render();e"

    }

};

/*=========================================================*/

function showPage(page) {

    const fnName = Router.pages[page];

    if (!fnName) {

        console.error("Page tidak ditemukan :", page);

        return;

    }

    const fn = window[fnName];

    if (typeof fn !== "function") {

        console.error(fnName + " belum tersedia.");

        return;

    }

    Router.current = page;

    AppState.page = page;

    clearApplication();

    fn();

}

/*=========================================================*/

function clearApplication() {

    const app = document.getElementById("app");

    if (app)
        app.innerHTML = "";

}

/*=========================================================*/

function getCurrentPage() {

    return Router.current;

}

function isPage(page) {

    return Router.current === page;

}

function goHome() {

    showPage("home");

}

function goLoading() {

    showPage("loading");

}

function goWorkspace() {

    showPage("workspace");

}

function refreshPage() {

    showPage(Router.current);

}

document.addEventListener("DOMContentLoaded", function () {

    console.log("Router Ready");

});
