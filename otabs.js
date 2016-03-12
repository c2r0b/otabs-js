(function() {
  $(document).ready(function() {
    // settings
    var sel_class = "active";

    // initialiaze
    $(".o_tabs_content").children(':not(:eq(0))').hide();
    $("ul.o_tabs li").eq(0).addClass(sel_class);

    // controller
    $("ul.o_tabs li").click(function() {

      // toogle 'active' class
      $(this).parent().children().removeClass(sel_class);
      $(this).addClass(sel_class);

      // get info and objects
      var id = $(this).parent().attr('rel');
      var rel = $('.o_tabs_content#' + id);
      var sel = $(this).index();

      // show correct content
      rel.children().hide();
      rel.children().eq(sel).show();
    });
  });
})();
