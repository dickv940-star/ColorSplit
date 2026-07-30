/**
 * Palette Manager v1.0
 * ColorSplit Pro
 */


const PaletteManager = {


    palettes:[],


    create(name){


        let palette={

            name:name,

            colors:[]

        };


        this.palettes.push(
            palette
        );


        return palette;


    },



    addColor(
        paletteName,
        color
    ){


        let palette =
        this.palettes.find(
            p=>p.name===paletteName
        );


        if(!palette){

            console.warn(
            "Palette tidak ditemukan"
            );

            return;

        }



        palette.colors.push(
            color
        );


        this.save();


    },



    removeColor(
        paletteName,
        index
    ){


        let palette =
        this.palettes.find(
            p=>p.name===paletteName
        );


        if(palette){

            palette.colors.splice(
                index,
                1
            );

        }


        this.save();


    },



    get(){

        return this.palettes;

    },



    save(){


        localStorage.setItem(

            "COLOR_PALETTE",

            JSON.stringify(
                this.palettes
            )

        );


    },


    load(){


        let data =
        localStorage.getItem(
            "COLOR_PALETTE"
        );


        if(data){

            this.palettes =
            JSON.parse(data);

        }


    }


};


window.PaletteManager =
PaletteManager;
