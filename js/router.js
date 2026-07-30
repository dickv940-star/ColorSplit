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


window.Router = {

    current:"home",

    pages:{}

};


/*=========================================================
 REGISTER PAGE
=========================================================*/

Router.register = function(name, renderer){

    Router.pages[name] = renderer;

};


/*=========================================================
 SHOW PAGE
=========================================================*/

window.showPage = function(page){

    console.log("Router →", page);


    const renderer = Router.pages[page];


    if(typeof renderer === "function"){

        Router.current = page;

        renderer();

    }
    else{

        console.error(
            "Page renderer tidak ditemukan:",
            page
        );

    }

};
