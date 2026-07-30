/*
=========================================================
Print Panel
=========================================================
*/


const PrintPanel = {



render(result){


let panel =
document.getElementById(
"printInfoPanel"
);



if(!panel)
return;



panel.innerHTML = `


<h3>
PRINT PREFLIGHT
</h3>


<div>


${

result.resolution ?

"✓ Resolution OK"

:

"✕ Resolution Low"

}



<br>


${

result.color ?

"✓ Color Ready"

:

"✕ RGB Mode"

}



</div>


`;



}



};


window.PrintPanel =
PrintPanel;
