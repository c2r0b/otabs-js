/* oTabsJS - by Lorenzo Ganni - v1.2 [2016.03.24] */
(function () {
  // variables
  var options, reversed, linked, n_items, id, $tabs;
  var sel_class = "active";

  // utils
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
  function activateMenuOption(obj) {
    obj.className += ' ' + sel_class;
  }
  function activateTabbedContent(obj,index) {
    for (var i = 0; i < obj.length; i++)
      if (i == index)
        obj[i].style.display = "block";
      else
        obj[i].style.display = "none";
  }
  function getMenuOptionIndex(elem){
      var  i = 0;
      while((elem = elem.previousElementSibling) != null) ++i;
      return i;
  }
  // get list item info
  function getElementInfo(e) {
    $options = e.children;
    reversed = hasClass(e,"reverse");
    linked = hasClass(e,"link");
    n_items = $options.length - 1;
    id = e.getAttribute('rel');
    id = (id != null) ? '#' + id : '';
    $tabs = document.querySelectorAll(".otabs_content"+id)[0].children;
  }
  // change list and content selected item
  function toggleSelection(index) {
    // toogle 'active' class
    for (var i = 0; i < $options.length; i++) {
      $options[i].className = $options[i].className.replace(sel_class,"");
    }
    activateMenuOption($options[index]);
    // choose linked tab if linked
    if (linked) {
      for (var i = 0; i <= n_items; i++) {
        if ($tabs[i].getAttribute("id") == $options[index].getAttribute('rel')) {
          tab_to_display = i;
        }
      }
    }
    else {
      tab_to_display =  index;
    }
    // reverse selection if necessary
    if (reversed) {
      tab_to_display = n_items - tab_to_display;
    }
    activateTabbedContent($tabs, tab_to_display);
  }

  // initalizer
  window.onload = function() {
    // get all otabs menu in use
    var $elems = document.querySelectorAll('ul.otabs');

    for (e in $elems) {
      // get info and objects
      var $e = $elems[e];
      getElementInfo($e);

      // menu element to be selected at the beginning
      var init = $e.dataset.select;
      if (init == "last" || init > n_items)
        init = n_items;
      else if (!/^[0-9\s\+]+$/.test(init))
        init = 0;

      activateMenuOption($options[init]);
      toggleSelection(init);

      // onclick listener
      for (o in $options) {
        $options[o].onclick = function() {
          // get info and objects
          var index = getMenuOptionIndex(this);
          getElementInfo(this.parentNode);
          toggleSelection(index);
        }
      }
    }
  }
})();
