/*
=========================================================
ColorSplit Pro
Router Engine
Version : 3.0.0
Architecture : Workspace PRO
Author : AppDIGI
=========================================================
*/

"use strict";

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

function showPage(page){

    const renderer = Router.pages[page];

    if(typeof renderer !== "function"){

        console.error("Renderer tidak ditemukan :", page);

        return;

    }

    Router.current = page;

    if(typeof AppState !== "undefined"){

        AppState.page = page;

    }

    clearApplication();

    renderer();

}

/*=========================================================
CLEAR APPLICATION
=========================================================*/

function clearApplication(){

    const app = document.getElementById("app");

    if(app){

        app.innerHTML = "";

    }

}

/*=========================================================
NAVIGATION
=========================================================*/

function goHome(){

    showPage("home");

}

function goLoading(){

    showPage("loading");

}

function goWorkspace(){

    showPage("workspace");

}

function refreshPage(){

    showPage(Router.current);

}

/*=========================================================
HELPER
=========================================================*/

function getCurrentPage(){

    return Router.current;

}

function isPage(page){

    return Router.current === page;

}

/*=========================================================
GLOBAL EXPORT
=========================================================*/

window.Router = Router;

window.showPage = showPage;

window.goHome = goHome;

window.goLoading = goLoading;

window.goWorkspace = goWorkspace;

window.refreshPage = refreshPage;

window.getCurrentPage = getCurrentPage;

window.isPage = isPage;

/*=========================================================
READY
=========================================================*/

document.addEventListener("DOMContentLoaded", ()=>{

    console.log("✓ Router Ready");

});
