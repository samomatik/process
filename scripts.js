$(document).ready(function() {
  $(".select").click(function() {
    $(this).toggleClass("done");
  });

  $(".clear").click(function() {
    $(".select").removeClass("done");
    $("textarea").val('');
    $("#before").val('');
    $(".arrgField").val('');
  });
});

function replacer() {

  var str = document.getElementById('before').value.
    replace(/\(.+?\)/g, '').
    replace(/[^a-z0-9+]+/gi, '');

  document.getElementById('before').value = str;

  var copyText = document.getElementById("before");
  copyText.select();
  document.execCommand("Copy");
}

document.getElementById('replacem').onclick = replacer;
