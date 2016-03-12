#oTabsJS
Library to create ordered tabbed content in HTML

##Synopsis
This simple Javascript library has been created as a simple solution when you need to display tabbed content in the same order of a list. It is meant to speed up the html markup process and avoid list-content reference errors.

##Installation
Simply include the js file (or minified js) in your html:
```html
<script src="src/lib/otabs.min.js"></script>
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

####List-content binding
If you're using this tool more than once in a page you'll need to bind each list with the appropriate tabbed content. You can simply do that using <b>rel</b> and <b>id</b> like this:
```html
<ul class="otabs" rel="WHATEVER_YOU_WANT">
...
<div class="otabs_content" id="WHATEVER_YOU_WANT">
...
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

##Changelog
####v1.1 [2015.3.12]
<ul>
  <li>Removed jQuery dependency</li>
  <li>List-content binding is now optional</li>
</ul>
####v1.0 [2015.3.11]
<ul>
  <li>First version.</li>
</ul>

##License
GNU General Public License
