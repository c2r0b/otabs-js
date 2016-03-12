(function() {
  $(document).ready(function() {
    // settings
    var sel_class = "active";
    var rev_class = "reverse";

    // controller
    $("ul.otabs").each(function() {

      // get info and objects
      var id = $(this).attr('rel');
      var reversed = $(this).hasClass(rev_class);
      var n_items = $(this).children().size() - 1;

      // menu element to be selected at the beginning
      var to_select = $(this).data('select');
      if (to_select == 'last')
        to_select = n_items;
      else if (!parseInt(to_select) || to_select > n_items || to_select < 0)
        to_select = 0;

      // init selection
      $(this).children().eq(to_select).addClass(sel_class);

      // tabbed content to be selected at the beginning
      var to_select = (reversed) ? n_items - to_select : to_select;

      $(".otabs_content#"+id).children(':not(:eq('+to_select+'))').hide();

      $(this).children().click(function() {

        // toogle 'active' class
        $(this).parent().children().removeClass(sel_class);
        $(this).addClass(sel_class);

        // get info and objects
        var rel = $('.otabs_content#' + id);
        var index = $(this).index();
        var sel = (reversed) ? n_items - index : index;

        // show correct content
        rel.children().hide();
        rel.children().eq(sel).show();
      });
    });
  });
})();
