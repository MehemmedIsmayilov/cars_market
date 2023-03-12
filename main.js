const login = document.querySelector(".login");
const form = document.querySelector(".form");
const navBar =document.querySelector("navBar");

login.addEventListener("click", () => {
    form.classList.toggle("form_js");
    
});

const navbar=document.querySelector(".navBar");
const navtitle=document.querySelector(".navTitle");
const nav_img=document.querySelector(".nav_img");
const nav_btn=document.querySelector(".nav_btn");


navbar.addEventListener("mouseover",(event)=>{
navtitle.classList.toggle("nt");
nav_img.classList.toggle("ni");


})