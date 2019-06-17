'script.js'
var main = document.querySelector(".main");
var sidebar = document.querySelector(".sidebar");
var menutoggle = document.querySelector("#menu-toggle");
var l_info = document.querySelector(".l_info");

menutoggle.addEventListener("click", function(e) {
  menutoggle.classList.toggle("active");
  main.classList.toggle("active");
  sidebar.classList.toggle("active");
  l_info.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    menutoggle.querySelector("i").classList.remove("fa-bars");
  } else {
    menutoggle.querySelector("i").classList.add("fa-bars");
  }
});
