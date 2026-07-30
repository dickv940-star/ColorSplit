/**
 * ICC Converter Engine v1.0
 * ColorSplit Pro
 *
 * ICC Color Management Core
 */


const ICCConverter = {


    profile:{

        RGB:
        "sRGB IEC61966-2.1",

        CMYK:
        "Coated FOGRA39"

    },



    init(){

        console.log(
            "ICC Converter Ready"
        );

        console.log(
            this.profile
        );

    },



    setProfile(type,name){

        if(type==="RGB"){

            this.profile.RGB=name;

        }


        if(type==="CMYK"){

            this.profile.CMYK=name;

        }


    },



    getProfile(){

        return this.profile;

    },



    convertRGBtoCMYK(rgb){


        /*
          Temporary fallback converter

          Nanti dapat diganti
          ICC transform engine
        */


        let r =
        rgb.r/255;

        let g =
        rgb.g/255;

        let b =
        rgb.b/255;



        let k =
        1-Math.max(r,g,b);



        let c =
        (1-r-k)/(1-k)||0;


        let m =
        (1-g-k)/(1-k)||0;


        let y =
        (1-b-k)/(1-k)||0;



        return {


            C:
            +(c*100).toFixed(2),


            M:
            +(m*100).toFixed(2),


            Y:
            +(y*100).toFixed(2),


            K:
            +(k*100).toFixed(2),


            profile:
            this.profile.CMYK


        };


    }



};


window.ICCConverter =
ICCConverter;
