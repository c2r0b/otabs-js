#ordered-tabs
Library to create ordered tabbed content using jQuery

#Installation
Simply include the js file (or minified js) to your html:
<script src="src/lib/otabs.js"></script>

You'll need jQuery in order to make it work. You can include it from a CDN like this:
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>

#How to use
In html create a menu with this template:
<ul class="otabs" rel="WHATEVER_YOU_WANT">
  <li>..</li>
  ...
  <li>..</li>
</ul>

And then this when you want your tabbed content to appear:
<div class="otabs_content" id="WHATEVER_YOU_WANT">
  <div>..</div>
  ...
  <div>..</div>
</div>

#License
MIT
