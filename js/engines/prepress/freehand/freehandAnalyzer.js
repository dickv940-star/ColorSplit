/**
 * FreeHand Analyzer Engine v1.0
 * ColorSplit Pro
 */


const FreeHandAnalyzer = {


    data:{},


    analyze(file, image){


        console.log(
            "Analyzing File..."
        );


        this.data={


            filename:
            file.name,


            size:
            file.size,


            width:
            image.width,


            height:
            image.height,


            format:
            file.type,


            colorMode:
            "RGB",


            ready:false


        };


        this.check();


        return this.data;


    },



    check(){


        let score=0;



        if(
            this.data.width>0
        ){

            score++;

        }



        if(
            this.data.height>0
        ){

            score++;

        }



        if(
            this.data.format
        ){

            score++;

        }



        this.data.ready =
        score>=3;



    },



    getReport(){

        return this.data;

    }



};


window.FreeHandAnalyzer =
FreeHandAnalyzer;
