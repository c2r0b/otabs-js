#ordered-tabs
Library to create ordered tabbed content using jQuery

##Synopsis
This simple jQuery code has been created as a simple solution when you need to display tabbed content in the same order of a list. It is meant to speed up the html markup proces and avoid list-content reference errors.

##Installation
Simply include the js file (or minified js) to your html:
```html
<script src="src/lib/otabs.min.js"></script>
```

You'll need jQuery in order to make it work. You can include it from a CDN like this:
```html
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
```

##How to use
In your html create a list with this template:
```html
<ul class="otabs" rel="WHATEVER_YOU_WANT">
  <li>..</li>
  ...
  <li>..</li>
</ul>
```

And then this when you want your tabbed content to appear:
```html
<div class="otabs_content" id="WHATEVER_YOU_WANT">
  <div>..</div>
  ...
  <div>..</div>
</div>
```

##License
MIT
