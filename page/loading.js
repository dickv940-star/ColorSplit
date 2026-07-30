function renderLoading(){

document.getElementById("app").innerHTML=`

<div class="loading">

<h2>Processing File</h2>

<div class="spinner"></div>

<p id="loadingText">
Reading File...
</p>

</div>

`;

setTimeout(()=>{

showPage("workspace");

},2000);

}
