function renderHome(){

document.getElementById("app").innerHTML = `

<div class="home">

<img src="assets/logo.png" class="logo">

<h1>ColorSplit Pro</h1>

<p>
Automatic CMYK Separation
</p>

<label class="upload">

<input
type="file"
id="fileInput"
accept=".pdf,.png,.jpg,.jpeg,.tif,.tiff">

Upload File

</label>

</div>

`;

document
.getElementById("fileInput")
.onchange=async function(){

    if(!this.files.length)
        return;

    showPage("loading");

    await importFile(this.files[0]);

    showPage("workspace");

}
