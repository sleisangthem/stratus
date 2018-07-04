jQuery(document).ready(function() {
  App.init();
  $("#search").click(function() {
    $.ajax({
      method: "GET",
      url: "doctors",
      data: {q : $("#query").val()}
    }).done(function(data) {
      console.log(data);
    });
  });
});
