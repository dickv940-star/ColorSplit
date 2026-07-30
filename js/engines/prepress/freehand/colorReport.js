/**
 * Color Report Engine v1.0
 */


const ColorReport = {


generate(colors){


return {


total:
colors.length,


colors:
colors.map(
c=>({


RGB:
`${c.r},${c.g},${c.b}`,


CMYK:
ICCConverter
.convertRGBtoCMYK(c)


})

)


};


}



};


window.ColorReport =
ColorReport;
