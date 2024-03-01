var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event){
    for(let tablink of Array.from(tablinks)){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of Array.from(tabcontents)){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sMenu = document.getElementById("sidemenu");

function openmenu(){
    sMenu.style.right = "0";
}

function closemenu(){
    sMenu.style.right = "-200px";
}

var funkcija = document.getElementById("funkcija");
if (funkcija) {
    funkcija.addEventListener("click", function(){
        sMenu.style.right = "-200px";
    });
}