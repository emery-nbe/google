let menu = document.getElementById("menu");

let navDrawer = document.getElementById("nav-drawer");

let closerDrawer = document.getElementById("closer-drawer");

//let body = document.getElementsByTagName("body");


menu.onclick = function(){
    navDrawer.style.display = "block";
   
}
closerDrawer.onclick = function(){
    navDrawer.style.display = "none";
}