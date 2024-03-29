# oTabsJS
Library to create ordered/linked tabbed content in HTML.

## Synopsis
This simple Javascript library has been created as a simple solution when you need to display tabbed content in the same order of a list. It is meant to speed up the html markup process and avoid list-content reference errors.

## Install
#### Using npm
```
npm install -S otabs-js
```

#### Using bower
```
bower install otabs-js
```

#### Manually
Simply include the js file (or minified js) in your html:
```html
<script src="otabs.min.js"></script>
```

## Activate
Place this JS line where you want oTabs to start working:
```html
<script>
  new oTabs().init();
</script>
```

## How to use
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

#### List-container binding
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


## Secondary features
#### Specific selection
You can select a specific tab using the <b>data-select</b> attribute. Examples:
```html
<ul class="otabs" data-select="42">
```
<b>Valid values (default is 0):</b>
<ul>
  <li>a number between 0 to N</li>
  <li><b>last</b> for the last tabbed item</li>
</ul>

#### Reverse order
You can reverse the display order of the content to be in the reversed order of the menu by using the <b>reverse</b> class like this:
```html
<ul class="otabs reverse">
```

#### Option-content binding
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

#### Manually refresh oTabs on DOM changes
```html
<script>
  var otabs = new oTabs().init();
  // ... whatever ...
  otabs.update();
</script>
```

## Styling
To target this in your CSS you could use the `.otabs` class for the menu and `.otabs_content` for the area where the content displays.

The selected tab has the `.active` class and you can simply target the other tabs with `:not(.active)`.

## Compile for production
If you want to build your own minified version of this library you can do that using npm and gulp.

Install the dependencies (you'll need `npm`):
`npm install`

Execute gulp to generate the file `otabs.min.js` (you'll need `gulp`):
`gulp`

## Updating
#### From v < 1.3.x
Simply add this line where you want otabs to start working:
```html
<script>new oTabs().init();</script>
```

## License
MIT License
