/*
=========================================================
ColorSplit Pro
Prepress Workspace Page
Version : 3.0.0
Architecture : FreeHand Preparation Workspace
Author : AppDIGI
=========================================================
*/

"use strict";


/*=========================================================
RENDER WORKSPACE
=========================================================*/


function renderWorkspace(){


    const app =
    document.getElementById("app");



    if(!app){

        console.error(
            "Workspace container tidak ditemukan"
        );

        return;

    }



    const file =
    AppState.file || {};



    app.innerHTML = `


<div class="workspace">


<!-- ================= TOP BAR ================= -->


<div class="topbar">


    <div class="top-left">


        <strong>
        ColorSplit Pro
        </strong>


        <span>
        Prepress Engine
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




<!-- ================= LEFT CHANNEL ================= -->


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

Export Data

</button>



</div>





<!-- ================= CENTER ================= -->


<div class="viewer">


<canvas id="previewCanvas">

</canvas>



<div id="canvasInfo">


Ready


</div>


</div>





<!-- ================= RIGHT PANEL ================= -->


<div class="properties">



<h3>

File Information

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
File Size
</label>

<span id="fileSize">
-
</span>

</div>



<div class="property">

<label>
Type
</label>

<span id="fileType">
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
Resolution
</label>

<span id="resolution">
-
</span>

</div>




<div class="property">

<label>
DPI
</label>

<span id="dpi">
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



<hr>



<!-- PREPRESS RESULT -->


<hr>

<div id="colorInspector">

</div>


<div id="prepressPanel">

</div>






<!-- ================= STATUS ================= -->


<div class="statusbar">


<span id="statusText">

Ready

</span>



<span>

ColorSplit Pro v3.0

</span>



</div>



</div>


`;



/*
=========================================================
DRAW PREVIEW
=========================================================
*/


if(
typeof PreviewLoader !== "undefined"
){


    PreviewLoader.draw();


}





/*
=========================================================
UPDATE INFO
=========================================================
*/


updateWorkspaceMetadata();

/*
=========================================================
INIT PREPRESS UI
=========================================================
*/


if(
typeof PrepressPanel !== "undefined"
){


    PrepressPanel.init();


    console.log(
        "✓ Prepress Panel Initialized"
    );


}



/*
=========================================================
AUTO ANALYZE
=========================================================
*/


setTimeout(
()=>{


    analyzePrepress();


},
800
);



}







/*=========================================================
PREPRESS ANALYZER
=========================================================*/


function analyzePrepress(){



    if(
    typeof FreeHandAnalyzer === "undefined"
    ){

        console.warn(
        "FreeHand Analyzer belum aktif"
        );


        return;

    }




    const canvas =
    document.getElementById(
        "previewCanvas"
    );



    if(!canvas){

        return;

    }





    updateStatus(
        "Analyzing File..."
    );




    const report =
    FreeHandAnalyzer.analyze(
        canvas
    );





    AppState.freehand =
    report;





    if(
    typeof PrepressPanel !== "undefined"
    ){


        PrepressPanel.update(
            report
        );


    }





    updateStatus(
        "Prepress Analysis Complete"
    );



}








/*=========================================================
UPDATE METADATA
=========================================================*/


function updateWorkspaceMetadata(){



    if(!AppState.metadata)
        return;



    const m =
    AppState.metadata;



    setValue(
        "fileName",
        m.fileName || "-"
    );



    setValue(
        "fileSize",
        formatFileSize(
            m.size || 0
        )
    );



    setValue(
        "fileType",
        m.mime || "-"
    );



    setValue(
        "colorSpace",
        m.colorSpace || "Unknown"
    );



    setValue(
        "resolution",
        `${m.width || 0} × ${m.height || 0}`
    );



    setValue(
        "dpi",
        `${m.dpi || 96} DPI`
    );



    setValue(
        "iccProfile",
        m.iccProfile || "-"
    );


}







/*=========================================================
SET VALUE
=========================================================*/


function setValue(
id,
value
){


    const el =
    document.getElementById(
        id
    );



    if(el){

        el.textContent =
        value;

    }


}







/*=========================================================
CHANNEL CONTROL
=========================================================*/


document.addEventListener(
"click",
function(e){



switch(
e.target.id
){



case "btnOriginal":


if(
typeof PreviewLoader !== "undefined"
){

    PreviewLoader.draw();

}


updateStatus(
"Original Preview"
);


break;





case "btnC":


showChannel(
"C"
);


break;





case "btnM":


showChannel(
"M"
);


break;





case "btnY":


showChannel(
"Y"
);


break;





case "btnK":


showChannel(
"K"
);


break;






case "btnAnalyze":


analyzePrepress();


break;






case "btnSeparation":


generateSeparation();


break;






case "btnExport":


exportPrepressData();


break;



}



});







/*=========================================================
SHOW CHANNEL
=========================================================*/


function showChannel(
channel
){



if(
typeof SeparationEngine !== "undefined"
){


    const layer =
    SeparationEngine.getLayer(
        channel
    );


    if(layer){


        console.log(
        "Show Channel",
        channel
        );


    }


}



updateStatus(
channel+" Channel"
);



}








/*=========================================================
GENERATE CMYK
=========================================================*/


function generateSeparation(){



const canvas =
document.getElementById(
"previewCanvas"
);



if(
!canvas
)
return;





if(
typeof SeparationEngine !== "undefined"
){



    SeparationEngine.process(
        canvas
    );



    updateStatus(
    "CMYK Separation Generated"
    );



}



}








/*=========================================================
EXPORT PREPRESS DATA
=========================================================*/


function exportPrepressData(){



const data = {


metadata:
AppState.metadata,


colors:
AppState.colors,


freehand:
AppState.freehand,


print:
AppState.print



};




const blob =
new Blob(
[
JSON.stringify(
data,
null,
2
)
],
{
type:
"application/json"
}
);




const link =
document.createElement(
"a"
);



link.href =
URL.createObjectURL(
blob
);



link.download =
"colorsplit_prepress_data.json";



link.click();



updateStatus(
"Prepress Data Exported"
);



}
