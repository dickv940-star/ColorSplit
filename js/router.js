/*
=========================================================
ColorSplit Pro
Router Engine
Version : 1.0.0
=========================================================
*/

"use strict";

/*=========================================================
ROUTES
=========================================================*/

const Router = {

    current: "home",

    pages: {

        home: renderHome,

        loading: renderLoading,

        workspace: renderWorkspace

    }

};

/*=========================================================
SHOW PAGE
=========================================================*/

function showPage(pageName) {

    if (!Router.pages[pageName]) {

        console.error("Page tidak ditemukan :", pageName);

        return;

    }

    Router.current = pageName;

    AppState.page = pageName;

    clearApplication();

    Router.pages[pageName]();

}

/*=========================================================
CLEAR APPLICATION
=========================================================*/

function clearApplication() {

    const app = document.getElementById("app");

    if (!app)
        return;

    app.innerHTML = "";

}

/*=========================================================
GET CURRENT PAGE
=========================================================*/

function getCurrentPage() {

    return Router.current;

}

/*=========================================================
IS CURRENT PAGE
=========================================================*/

function isPage(name) {

    return Router.current === name;

}

/*=========================================================
HOME
=========================================================*/

function goHome() {

    showPage("home");

}

/*=========================================================
LOADING
=========================================================*/

function goLoading() {

    showPage("loading");

}

/*=========================================================
WORKSPACE
=========================================================*/

function goWorkspace() {

    showPage("workspace");

}

/*=========================================================
REFRESH
=========================================================*/

function refreshPage() {

    showPage(Router.current);

}

/*=========================================================
DESTROY
=========================================================*/

function destroyPage() {

    clearApplication();

}

/*=========================================================
AFTER DOM READY
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Router Ready");

});
