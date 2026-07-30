/**
 * Color Inspector Engine v1.0
 * Display RGB / CMYK / HEX realtime
 * ColorSplit Pro
 */

const ColorInspector = {


    panel:null,


    init(){

        this.panel = document.getElementById(
            "colorInspector"
        );


        if(!this.panel){

            console.warn(
                "Color Inspector panel tidak ditemukan"
            );

            return false;

        }


        console.log(
            "Color Inspector Ready"
        );


        return true;

    },



    show(rgb,cmyk){


        if(!this.panel)
            return;



        let hex = this.rgbToHex(
            rgb.r,
            rgb.g,
            rgb.b
        );



        this.panel.innerHTML = `

        <div class="ci-header">
            COLOR INSPECTOR
        </div>


        <div class="ci-preview"
        style="
        background:rgb(${rgb.r},
        ${rgb.g},
        ${rgb.b});
        ">
        </div>



        <div class="ci-section">

            <h4>RGB</h4>

            <div>
            R : ${rgb.r}
            </div>

            <div>
            G : ${rgb.g}
            </div>

            <div>
            B : ${rgb.b}
            </div>

        </div>



        <div class="ci-section">

            <h4>CMYK</h4>

            <div>
            C : ${cmyk.C}%
            </div>

            <div>
            M : ${cmyk.M}%
            </div>

            <div>
            Y : ${cmyk.Y}%
            </div>

            <div>
            K : ${cmyk.K}%
            </div>


        </div>



        <div class="ci-section">

            <h4>HEX</h4>

            <div class="ci-hex">
            ${hex}
            </div>

        </div>


        `;


    },



    rgbToHex(r,g,b){

        return "#" +

        [r,g,b]

        .map(
            x=>{

                let hex =
                x.toString(16);

                return hex.length===1?
                "0"+hex:
                hex;

            }
        )

        .join("")
        .toUpperCase();


    },



    clear(){

        if(this.panel){

            this.panel.innerHTML=
            "";

        }

    }



};



// Global Export

window.ColorInspector =
ColorInspector;
