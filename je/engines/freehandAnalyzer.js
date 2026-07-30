/*
=========================================================
FreeHand Analyzer Engine
=========================================================
*/


const FreeHandAnalyzer = {



analyze(canvas){


console.log(
"FreeHand Analysis Start"
);



let objects =
ObjectDetector.analyze(
canvas
);



let layers =
LayerBuilder.create(
objects
);



let result={


objects:


objects,



layers:


layers,



ready:

true



};



AppState.freehand =
result;



return result;


}



};



window.FreeHandAnalyzer =
FreeHandAnalyzer;
