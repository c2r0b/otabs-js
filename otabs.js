(function() {
  $(document).ready(function() {
    // settings
    var sel_class = "active";

    // initialiaze
    $(".otabs_content").children(':not(:eq(0))').hide();
    $("ul.otabs li").eq(0).addClass(sel_class);

    // controller
    $("ul.otabs li").click(function() {

      // toogle 'active' class
      $(this).parent().children().removeClass(sel_class);
      $(this).addClass(sel_class);

      // get info and objects
      var id = $(this).parent().attr('rel');
      var rel = $('.otabs_content#' + id);
      var sel = $(this).index();

      // show correct content
      rel.children().hide();
      rel.children().eq(sel).show();
    });
  });
})();
