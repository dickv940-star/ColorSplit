/**
 * Soft Proof Engine v1.0
 * ColorSplit Pro
 */


const SoftProof = {


    enabled:false,


    settings:{


        paperSimulation:true,

        inkSimulation:true,

        profile:"Coated FOGRA39"


    },



    enable(){

        this.enabled=true;

        console.log(
            "Soft Proof ON"
        );

    },



    disable(){

        this.enabled=false;

        console.log(
            "Soft Proof OFF"
        );

    },



    apply(rgb){


        if(!this.enabled)
            return rgb;



        /*
          Simulasi sederhana
          CMYK compression
        */


        let factor=0.90;



        return {


            r:
            Math.round(rgb.r*factor),


            g:
            Math.round(rgb.g*factor),


            b:
            Math.round(rgb.b*factor)


        };


    },



    setProfile(profile){

        this.settings.profile=
        profile;

    }



};


window.SoftProof =
SoftProof;
