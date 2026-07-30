/**
 * PDF Separation Export
 */


const PDFSeparation = {



async export(layers){


console.log(
"Generate PDF Separation"
);



let pages=[
"Cyan",
"Magenta",
"Yellow",
"Black"
];



pages.forEach(
(page)=>{


console.log(
"Create Page:",
page
);


});



}



};


window.PDFSeparation =
PDFSeparation;
