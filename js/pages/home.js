/*
=========================================================
 ColorSplit Pro
 Home Page
=========================================================
*/


function renderHome(){

    console.log("Rendering HOME");


    const app = document.getElementById("app");


    if(!app){

        console.error(
            "Container #app tidak ditemukan"
        );

        return;

    }


    app.innerHTML = `

        <div class="home-page">

            <h1>
                ColorSplit Pro
            </h1>


            <p>
                Professional Color Separation Workspace
            </p>


            <button onclick="showPage('workspace')">
                Start Workspace
            </button>


        </div>

    `;

}


/*
Register Router
*/

Router.register(
    "home",
    renderHome
);
