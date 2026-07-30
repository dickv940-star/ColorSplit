init(){


this.container =
document.getElementById(
"prepressPanel"
);



if(!this.container){

console.warn(
"Prepress Panel container belum dibuat"
);

return false;

}


this.render();


return true;


}
