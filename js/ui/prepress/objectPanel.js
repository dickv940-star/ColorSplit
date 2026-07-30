/*
=========================================================
Object Panel
=========================================================
*/


const ObjectPanel = {



render(objects){


let panel =
document.getElementById(
"objectInfoPanel"
);



if(!panel)
return;



panel.innerHTML = `

<h3>
OBJECTS
</h3>


<div class="object-list">


${
objects.map(
(obj)=>`

<div class="object-item">


<b>
${obj.type}
</b>


<br>


Position:

${obj.x},
${obj.y}


<br>


Size:

${obj.width} x ${obj.height}


</div>


`
).join("")
}


</div>


`;



}



};



window.ObjectPanel =
ObjectPanel;
