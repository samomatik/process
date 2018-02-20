$(document).ready(function() {
  $(".select").click(function() {
    $(this).toggleClass("done");
  });

  $(".clear").click(function() {
    $(".select").removeClass("done");
    $("textarea").val('');
  });
});
