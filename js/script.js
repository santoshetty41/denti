const menubar = document.querySelector("#menubar");
const nav_list = document.querySelector(".nav-list");

menubar.addEventListener("click", function () {
    menubar.classList.toggle('fa-times');
    nav_list.classList.toggle("mobile_nav");
});
