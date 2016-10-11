function oTabs() {
  // variables
  this.sel_class = "active";

  // utils
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
  function activateMenuOption(obj) {
    obj.className += ' ' + this.sel_class;
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
    // if a menu doesn'texist
    if (!(this.options = e.children)) return false;
    // otherwise analyze it
    this.reserved = hasClass(e,"reverse");
    this.linked = hasClass(e,"link");
    this.n_items = this.options.length - 1;
    this.id = e.getAttribute('rel');
    this.id = (this.id != null) ? '#' + this.id : '';
    this.tabs = document.querySelectorAll(".otabs_content"+this.id)[0].children;
    return true;
  }
  // change list and content selected item
  function toggleSelection(index) {
    // toogle 'active' class
    for (var i = 0; i < this.options.length; i++) {
      this.options[i].className = this.options[i].className.replace(this.sel_class,"");
    }
    activateMenuOption(this.options[index]);
    // choose linked tab if linked
    if (this.linked) {
      for (var i = 0; i <= this.n_items; i++) {
        if (this.tabs[i].getAttribute("id") == this.options[index].getAttribute('rel')) {
          tab_to_display = i;
        }
      }
    }
    else {
      tab_to_display = index;
    }
    // reverse selection if necessary
    if (this.reserved) {
      tab_to_display = this.n_items - tab_to_display;
    }
    activateTabbedContent(this.tabs, tab_to_display);
  }
  // initialization of the menu
  this.init = this.update = function() {
    window.onload = function() {
      // get all otabs menu in use
      var $elems = document.querySelectorAll('ul.otabs');

      for (e in $elems) {
        // get info and objects
        if (getElementInfo(($e = $elems[e]))) {
          // menu element to be selected at the beginning
          var init = $e.dataset.select;
          if (init == "last" || init > this.n_items)
            init = this.n_items;
          else if (!/^[0-9\s\+]+$/.test(init))
            init = 0;

          activateMenuOption(this.options[init]);
          toggleSelection(init);

          // onclick listener
          for (o in this.options) {
            this.options[o].onclick = function() {
              // get info and objects
              var index = getMenuOptionIndex(this);
              getElementInfo(this.parentNode);
              toggleSelection(index);
            }
          }
        }
      }
    }
  }
};
