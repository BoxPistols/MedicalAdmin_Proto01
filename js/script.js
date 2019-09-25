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
// Age
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

// form Action
$(document).ready(function() {

  $("#defaultCheck1").click(function() {
    // Select if CheckBox
    if ($("#defaultCheck1").prop("checked") == true) {
      console.log("A");
      $(".custom-select-Group").css('opacity', '0.5');
      $(".custom-select").prop('disabled', true);
    } else {
      console.log("B");
      $(".custom-select-Group").css('opacity', '1');
      $(".custom-select").prop('disabled', false);
    }
  })


  // Selects if Select
  $("#defaultCheck1").prop('required', true);

  $('select.custom-select').change(function() {
    var r = $('option:selected').val();
    console.log(r);
    if (($('option:selected').val() == '')) {
      $("#defaultCheck1").prop('disabled', false);
      $("#defaultCheck1").prop('required', true);
    } else {
      $("#defaultCheck1").prop('disabled', true);
      $("#defaultCheck1").prop('required', false);
    }
  })

  // var target = $('input#dev').val();
  // // var obj = $("input#dev");
  // if (target == '') {
  //   console.log("必須入力項目です");
  //   // return false;
  // }

})

/*
  Sort
  https://mdbootstrap.com/docs/jquery/tables/search/
  https://datatables.net/examples/advanced_init/length_menu.html
*/

// $(document).ready(function() {
//   $('#example').DataTable({
//     // "order": [[ 1, "desc" ]]
//     "lengthMenu": [
//       [5, 10, 15, -1],
//       [5, 10, 15, "All"]
//     ]
//   });
// });


// $('button.adaptation').on('click', function(e) {
//   $elem = $(e.target);
//
//   if ($elem.hasClass('active')) {
//     $elem.removeClass('active');
//   } else {
//     $elem.addClass('active');
//   }
// });
