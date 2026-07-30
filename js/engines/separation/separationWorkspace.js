/**
 * Separation Workspace v1.0
 * ColorSplit Pro
 */


const SeparationWorkspace = {



container:null,



init(){


this.container =
document.getElementById(
"separationWorkspace"
);



if(!this.container){

console.warn(
"Workspace tidak ditemukan"
);

return;

}


this.render();


},




render(){


this.container.innerHTML=`

<div class="sep-header">

CMYK SEPARATION

</div>


<div class="sep-grid">


<div>
<button data-layer="C">
CYAN
</button>

<canvas id="cyanPreview">
</canvas>

</div>



<div>
<button data-layer="M">
MAGENTA
</button>

<canvas id="magentaPreview">
</canvas>

</div>



<div>
<button data-layer="Y">
YELLOW
</button>

<canvas id="yellowPreview">
</canvas>

</div>



<div>
<button data-layer="K">
BLACK
</button>

<canvas id="blackPreview">
</canvas>

</div>


</div>


<button id="exportSeparation">

EXPORT

</button>

`;


}



};


window.SeparationWorkspace =
SeparationWorkspace;
