// 'script.js'
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


/*-------------------------*/

function result() {
  let age = document.querySelector("input.age");
  console.log("hoge");

  var min = 20;
  var max = 48;
  var v = Math.floor(Math.random() * (max + 1 - min)) + min;
  age.value = v;
  return false;
}

function ex() {
  console.log("日付が変更されました");
  result();
}


/*
  Sort
  https://mdbootstrap.com/docs/jquery/tables/search/
  https://datatables.net/examples/advanced_init/length_menu.html
*/

$(document).ready(function() {
  $('#example').DataTable({
    // "order": [[ 1, "desc" ]]
    "lengthMenu": [
      [5, 10, 15, -1],
      [5, 10, 15, "All"]
    ]
  });
});


$('button.adaptation').on('click', function(e) {
  $elem = $(e.target);
  if ($elem.hasClass('active')) {
    $elem.removeClass('active');
  } else {
    $elem.addClass('active');
  }
});


/////// Radio
function link() {
  if (document.form1.customRadio[0].checked == true)
    location.href = "result.html";
  if (document.form1.customRadio[1].checked == true)
    location.href = "result_bank.html";
  if (document.form1.customRadio[2].checked == true)
    location.href = "result.html";
  if (document.form1.customRadio[3].checked == true)
    location.href = "result.html";
  if (document.form1.customRadio[4].checked == true)
    location.href = "result.html";
}
