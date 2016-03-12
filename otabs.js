/* oTabsJS - by Lorenzo Ganni - v1.1 [2015.3.12] */
(function () {
  // initalizer
  window.onload = function() {
    // utils
    function hasClass(element, cls) {
      return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
    function activateMenuOption(obj) {
      obj.className += ' ' + sel_class;
    }
    function activateTabbedContent(obj,index) {
      for (t in obj)
        if (t != index)
          obj[t].style.display = "none";
        else
          obj[t].style.display = "block";
    }
    function getMenuOptionIndex(elem){
        var  i = 0;
        while((elem = elem.previousElementSibling) != null) ++i;
        return i;
    }
    // settings
    var sel_class = "active";
    // get objects
    var $elems = document.querySelectorAll('ul.otabs');

    for (i in $elems) {
      // get info and objects
      var $e = $elems[i];
      var $menu = $e;
      var $options = $e.getElementsByTagName('li');
      var reversed = hasClass($menu,"reverse");
      var n_items = $options.length - 1;
      var id = $menu.getAttribute('rel');
      var $tabs = (id == null) ?
                    document.querySelectorAll(".otabs_content")[0].children
                  :
                    document.querySelectorAll(".otabs_content#"+id)[0].children;

      // listener
      for (o in $options) {
        $options[o].onclick = function() {
          // toogle 'active' class
          for ($o in $options)
            $options[$o].className = "";
          activateMenuOption(this);
          // get info and objects
          var index = getMenuOptionIndex(this);
          // display correct content
          activateTabbedContent($tabs,(reversed) ? n_items - index : index);
        }
      }
      // menu element to be selected at the beginning
      var init = $menu.dataset.select;
      if (!/^[0-9\s\+]+$/.test(init)) init = 0;
      if (init == "last" || init > n_items) init = n_items;
      // init selection
      activateMenuOption($options[init]);
      // display correct content
      activateTabbedContent($tabs,(reversed) ? n_items - init : init);
    }
  }
})();
