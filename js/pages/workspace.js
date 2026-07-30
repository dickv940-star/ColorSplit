function renderWorkspace(){

document.getElementById("app").innerHTML=`

<div class="workspace">

<div class="sidebar">

<button>Original</button>
<button>Cyan</button>
<button>Magenta</button>
<button>Yellow</button>
<button>Black</button>

</div>

<div class="viewer">

<h2>${AppState.file.name}</h2>

<p>Preview Engine Coming Soon</p>

</div>

</div>

`;

}
