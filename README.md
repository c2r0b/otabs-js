#oTabsJS v1.2.1
Library to create ordered/linked tabbed content in HTML

##Synopsis
This simple Javascript library has been created as a simple solution when you need to display tabbed content in the same order of a list. It is meant to speed up the html markup process and avoid list-content reference errors.

##Installation
Simply include the js file (or minified js) in your html:
```html
<script src="otabs.min.js"></script>
```

##How to use
In your html create a list with this template:
```html
<ul class="otabs">
  <li>..</li>
  ...
  <li>..</li>
</ul>
```
And then use this template where you want your tabbed content to appear:
```html
<div class="otabs_content">
  <div>..</div>
  ...
  <div>..</div>
</div>
```
<b>NOTE:</b> you can use whatever type of HTML tag for the content (`div` is just an example)

####List-container binding
If you're using this tool more than once in a page you'll need to bind each list with the appropriate tabbed content. You can simply do that using <b>rel</b> and <b>id</b> like this:
```html
<ul class="otabs" rel="WHATEVER_YOU_WANT">
  ...
</ul>
...
<div class="otabs_content" id="WHATEVER_YOU_WANT">
  ...
</div>
```


##Secondary features
####Specific selection
You can select a specific tab using the <b>data-select</b> attribute. Examples:
```html
<ul class="otabs" data-select="42">
```
<b>Valid values (default is 0):</b>
<ul>
  <li>a number between 0 to N</li>
  <li><b>last</b> for the last tabbed item</li>
</ul>

####Reverse order
You can reverse the display order of the content to be in the reversed order of the menu by using the <b>reverse</b> class like this:
```html
<ul class="otabs reverse">
```

####Option-content binding
If you don't want oTabsJS to automatically bind each option with the corresponding content in order, you can manually bind them adding the <b>link</b> class to the menu and using <b>rel</b> and <b>id</b>:
```html
<ul class="otabs link">
  <li rel="content1">..</li>
  <li rel="content2">..</li>
  <li rel="content3">..</li>
</ul>
<div class="otabs_content">
  <div id="content2">..</div>
  <div id="content3">..</div>
  <div id="content1">..</div>
</div>
```

##Styling
To target this in your CSS you could use the `.otabs` class for the menu and `.otabs_content` for the area where the content displays.

The selected tab has the `.active` class and you can simply target the other tabs with `:not(.active)`.

##Changelog
####v1.2.1 [2016.03.24]
<ul>
  <li>[bug fix] list-container binding not necessary</li>
</ul>
####v1.2 [2016.03.24]
<ul>
  <li>Added linked mode</li>
  <li>Sample now available in the 'demo' folder</li>
  <li>General code refactoring</li>
  <li>[bug fix] data-select=last</li>
  <li>[bug fix] Multiple use in page</li>
</ul>
####v1.1 [2016.03.12]
<ul>
  <li>Removed jQuery dependency</li>
  <li>List-content binding is now optional</li>
</ul>
####v1.0 [2016.03.11]
<ul>
  <li>First version</li>
</ul>

##License
MIT License
