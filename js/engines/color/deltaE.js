/**
 * Delta E Engine v1.0
 * ColorSplit Pro
 */


const DeltaE = {



    calculate(color1,color2){


        let dr =
        color1.r-color2.r;


        let dg =
        color1.g-color2.g;


        let db =
        color1.b-color2.b;



        let distance =
        Math.sqrt(
            dr*dr+
            dg*dg+
            db*db
        );



        return {

            value:
            +(distance/255*100)
            .toFixed(2),


            level:
            this.level(distance)

        };


    },



    level(value){


        if(value<5)
            return "Excellent";


        if(value<15)
            return "Good";


        return "Different";


    }



};


window.DeltaE =
DeltaE;
